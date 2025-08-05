export type AboutContent = {
  selfInfo: string;
  skills: Skill[];
  tools: Tool[];
};

export type Skill = {
  id: string;
  skillName: string;
  icon: string;
};

export type Tool = {
  id: string;
  toolName: string;
  icon: string;
};

export const SELF_INTRO = "I have a deep passion and boundless curiosity in **Software Development**, the **Internet of Things**, and **Artificial Intelligence**. I thrive on bringing innovative ideas to life, whether through impactful applications, cutting-edge hardware, or a seamless fusion of both."

export const SKILLS: Skill[] = [
  {
    id: "ms-1",
    skillName: "Web Development",
    icon: "mdi:web",
  },
  {
    id: "ms-2",
    skillName: "Internet of Things",
    icon: "mdi:chip",
  },
];


export const TOOLS: Tool[] = [
  {
    id: "mt-1",
    toolName: "React",
    icon: "mdi:react",
  },
  {
    id: "mt-2",
    toolName: "TypeScript",
    icon: "mdi:language-typescript",
  },
  {
    id: "mt-3",
    toolName: "Firebase",
    icon: "mdi:firebase",
  },
  {
    id: "mt-4",
    toolName: "Go",
    icon: "mdi:language-go",
  },
  {
    id: "mt-5",
    toolName: "PostgreSQL",
    icon: "mdi:database",
  },
  {
    id: "mt-6",
    toolName: "Apache Kafka",
    icon: "mdi:lan",
  },
];
