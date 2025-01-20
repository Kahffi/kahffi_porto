import ProjectCard from "./ProjectCard";

export type TProject = {
  image: string[];
  title: string;
  description: string;
  tags: string[];
  category: string[];
  repoLink?: string;
  projectLink?: string;
};

const PROJECTS: TProject[] = [
  {
    image: [],
    title: "Spinny Smart Hydroponic",
    description:
      "Developed an IoT system for monitoring hydroponic plant, integrating machine learning model to classify plant's environment status",
    tags: ["Firebase", "React", "Ngrok", "ESP 8266"],
    category: [],
    repoLink: "https://github.com/Kahffi/iot_smart_hydroponic",
  },
  {
    image: [],
    title: "BangunID",
    category: [],
    description: "",
    tags: ["MongoDB", "Express.JS", "React", "React-Leaflet"],
    repoLink: "https://github.com/Kahffi/Bangun-ID",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      {PROJECTS.map((pjt) => {
        return <ProjectCard key={pjt.title} project={pjt} />;
      })}
    </div>
  );
}
