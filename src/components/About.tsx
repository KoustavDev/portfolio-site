import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { BackgroundLines } from "./ui/background-lines";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiRedis,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";
import { IconCloudMobile } from "./ui/IconCloud";
import { SparklesText } from "./magicui/sparkles-text";
import { CoolMode } from "./magicui/cool-mode";

const skillsRow1 = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

const skillsRow2 = [
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Web sockets", icon: SiSocketdotio, color: "#010101" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
];

const MarqueeRow = ({
  skills,
  direction = "left",
}: {
  skills: typeof skillsRow1;
  direction?: "left" | "right";
}) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div
        className={`flex gap-4 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          animation:
            direction === "left"
              ? "scroll-left 60s linear infinite"
              : "scroll-right 60s linear infinite",
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform duration-200 flex-shrink-0 cursor-pointer"
            >
              <IconComponent
                className="w-5 h-5 flex-shrink-0"
                style={{ color: skill.color }}
              />
              <span className="text-sm font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <BackgroundLines
      className="relative py-20 bg-gradient-to-t from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 overflow-hidden"
      svgOptions={{ duration: 1 }}
    >
      <div id="about" className="container mx-auto px-4">
        <SparklesText className="text-4xl lg:text-5xl font-bold mb-8 text-center">
          About Me
        </SparklesText>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg mb-6 text-center">
            As a passionate frontend developer, I specialize in creating
            intuitive and responsive web applications. With a strong foundation
            in modern JavaScript frameworks and a keen eye for design, I strive
            to build seamless user experiences that blend functionality with
            aesthetics.
          </p>
        </div>

        {/* Skills Marquee Section */}
        <div className="mb-12 space-y-6">
          <h3 className="text-xl font-semibold text-center mb-8">
            Technologies & Skills
          </h3>

          {/* First Row - Left to Right */}
          <MarqueeRow skills={skillsRow1} direction="left" />

          {/* Second Row - Right to Left */}
          <MarqueeRow skills={skillsRow2} direction="right" />

          <IconCloudMobile />
        </div>

        <div className="text-center relative z-10 cursor-pointer">
          <a
            href="/pdf/KOUSTAV-MAJH-Resume.pdf"
            download="Koustav-Majh-Resume.pdf"
            type="application/pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Koustav Majh's Resume as PDF"
          >
            <CoolMode>
              <Button size="lg">
                Download Resume
                <DownloadIcon className="ml-2 h-4 w-4" />
              </Button>
            </CoolMode>
          </a>
        </div>
      </div>
    </BackgroundLines>
  );
}
