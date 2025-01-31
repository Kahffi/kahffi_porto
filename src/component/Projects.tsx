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
      "IoT system for monitoring hydroponic plant, with machine learning model to classify plant's environment status",
    tags: ["Firebase", "React", "Ngrok", "ESP 8266"],
    category: [],
    repoLink: "https://github.com/Kahffi/iot_smart_hydroponic",
  },
  {
    image: [],
    title: "BangunID",
    category: [],
    description:
      "Interactive map-based web application using React and React-Leaflet to report damaged facilities effectively",
    tags: ["MongoDB", "Express.JS", "React", "React-Leaflet"],
    repoLink: "https://github.com/Kahffi/Bangun-ID",
  },
];

export default function Projects() {
  return (
    <div
      id="Projects"
      className="max-w-screen-lg flex flex-col h-[75vh] gap-3 md:flex-row md:flex-wrap md:gap-8 scroll-mt-24"
    >
      {PROJECTS.map((pjt) => {
        return <ProjectCard key={pjt.title} project={pjt} />;
      })}
    </div>
  );
}
