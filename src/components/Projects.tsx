"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filterOptions } from "@/data/projectData";
import { useTheme } from "next-themes";
import Link from "next/link";
import dynamic from "next/dynamic";

const MagicCard = dynamic(() => import("./MagicCard.client"), {
  ssr: false,
});

export default function Projects() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.category.includes(activeFilter)
    );
    setFilteredProjects(filtered);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-background lg:px-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="cursor-pointer capitalize transition-all duration-300 ease-in-out"
            >
              {filter}
            </Button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-[#27272a] rounded-lg shadow-lg overflow-hidden border border-black/[0.1] dark:border-white/[0.2]"
              >
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">
                          Live Demo
                          <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>

                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">
                          GitHub
                          <GithubIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
