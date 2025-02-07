import { useState } from "react";
import ProjectCard from "./ProjectCard";

import spinnyImg from "../assets/images/projects/spinny_dashboard_ss.png";
import bangunImg from "../assets/images/projects/bangun_id_ss.png";
import algoImg from "../assets/images/projects/algorithmia_site_ss.png";
import { Icon } from "@iconify/react/dist/iconify.js";

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
  const [projects] = useState<TProject[]>([
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
    {
      title: "Algorithmia Fest Website",
      category: [],
      image: algoImg,
      description:
        "Created a website for Algorithmia Fest's event, integrating html5-qrcode library to allow poins collection via QR-code at the event",
      tags: ["MongoDB", "React", "Tailwind CSS", "html5-qrcode"],
      repoLink: "https://github.com/Kahffi/algorithmia_site",
      projectLink: "https://algorithmia.pages.dev/",
    },
  ]);

  return (
    <div
      id="Projects"
      className="max-w-screen-lg  min-h-[75vh] flex flex-col items-center gap-16  scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold text-center">
        Projects I've Worked On
      </h2>
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2">
        {projects.map((pjt) => {
          return <ProjectCard key={pjt.title} project={pjt} />;
        })}
      </div>

      <p className="-mt-8">
        Check out all my projects on{" "}
        <span className="underline text-blue-700">
          <a
            href=""
            className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text hover:opacity-65 transition-opacity"
          >
            GitHub
            <Icon
              icon={"mdi:open-in-new"}
              className="inline -mt-1 ml-1 text-blue-700"
            />
          </a>
          <div className="w-full underline text-bla"></div>
        </span>{" "}
      </p>
    </div>
  );
}
