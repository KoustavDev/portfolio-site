type Skill = {
  name: string;
  value: number;
};

type SkillCategory = {
  [category: string]: Skill[];
};

export const skillsData: SkillCategory = {
  Frontend: [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 75 },
    { name: "Tailwind CSS", value: 74 },
    { name: "JavaScript", value: 79 },
    { name: "TypeScript", value: 76 },
    { name: "React", value: 70 },
    { name: "Redux", value: 67 },
    { name: "Next.js", value: 73 },
  ],
  Backend: [
    { name: "Node.js", value: 69 },
    { name: "Express.js", value: 70 },
    { name: "Web sockets", value: 55 },
    { name: "MongoDB", value: 60 },
    { name: "PostgreSQL", value: 53 },
    { name: "MySQL", value: 59 },
    { name: "GraphQL", value: 55 },
    { name: "Redis", value: 58 },
    { name: "Docker", value: 38 },
    { name: "AWS", value: 28 },
  ],
  DSA: [
    { name: "Array", value: 55 },
    { name: "LinkedList", value: 45 },
    { name: "Stack", value: 34 },
    { name: "Queue", value: 30 },
    { name: "Searching", value: 51 },
    { name: "Sorting", value: 51 },
    { name: "Hashing", value: 56 },
    { name: "Recursion", value: 39 },
    { name: "Bit Manipulation", value: 50 },
  ],
  Other: [
    { name: "Git", value: 70 },
    { name: "GitHub", value: 71 },
  ],
};

