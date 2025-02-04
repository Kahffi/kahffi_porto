import { useState } from "react";
import ProjectCard from "./ProjectCard";

import spinnyImg from "../assets/images/projects/spinny_dashboard_ss.png";
import bangunImg from "../assets/images/projects/bangun_id_ss.png";

export type TProject = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  repoLink?: string;
  projectLink?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<TProject[]>([
    {
      image: spinnyImg,
      title: "Spinny Smart Hydroponic",
      description:
        "IoT system for monitoring hydroponic plant, with machine learning model to classify plant's environment status",
      tags: ["Firebase", "React", "Ngrok", "ESP 8266", "Python", "Flask"],
      category: [],
      repoLink: "https://github.com/Kahffi/iot_smart_hydroponic",
    },
    {
      image: bangunImg,
      title: "BangunID",
      category: [],
      description:
        "Interactive map-based web application using React and React-Leaflet to report damaged facilities effectively",
      tags: ["MongoDB", "Express.JS", "React", "React-Leaflet"],
      repoLink: "https://github.com/Kahffi/Bangun-ID",
    },
  ]);

  return (
    <div
      id="Projects"
      className="max-w-screen-lg  min-h-[75vh] flex flex-col items-center gap-16  scroll-mt-20 border"
    >
      <h2 className="text-4xl font-semibold">Projects I've Worked On</h2>
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2">
        {projects.map((pjt) => {
          return <ProjectCard key={pjt.title} project={pjt} />;
        })}
      </div>
    </div>
  );
}
