"use client";

import { useState, useMemo } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import { skillsData } from "@/data/skillsData";


const filterOptions = [...Object.keys(skillsData)];

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 p-2 shadow-lg rounded border border-gray-200 dark:border-gray-700">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Skills() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  console.log(isMobile);
  const [activeFilter, setActiveFilter] = useState("Frontend");

  const filteredSkills = useMemo(() => {
    return skillsData[activeFilter] || [];
  }, [activeFilter]);

  const chartHeight = useMemo(() => {
    const skillCount = filteredSkills.length;
    const minHeight = 300;
    const heightPerSkill = 50;
    const maxHeight = 600;
    return Math.min(
      Math.max(minHeight, skillCount * heightPerSkill),
      maxHeight
    );
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize transition-colors duration-200"
            >
              {filter}
            </Button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ height: `${chartHeight}px`, width: "100%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={filteredSkills}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 30,
                        left: isMobile ? 0 : 120,
                        bottom: 5,
                      }}
                    >
                      <XAxis
                        type="number"
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <YAxis
                        dataKey="name"
                        type="category"
                        hide
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="value"
                        fill="var(--primary)"
                        radius={[0, 4, 4, 0]}
                        barSize={25}
                        isAnimationActive={false}
                        className="hover:brightness-110"
                      >
                        <LabelList
                          dataKey="name"
                          position="insideLeft"
                          offset={8}
                          className="fill-white text-sm capitalize"
                        />
                        <LabelList
                          dataKey="value"
                          position="right"
                          offset={8}
                          className="fill-black dark:fill-white text-sm"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
