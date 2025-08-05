import spinnyImg from "../assets/images/projects/spinny_dashboard_ss.webp";
import bangunImg from "../assets/images/projects/bangun_id_ss.webp";
import algoImg from "../assets/images/projects/algorithmia_site_ss.webp";
import tideWiseImg from "../assets/images/projects/tidewise_ss.webp";

export type TProject = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  repoLink?: string;
  projectLink?: string;
};

export const PROJECTS: TProject[] = [
     {
      image: tideWiseImg,
      title: "TideWise",
      description:
        "An expert system to assess tidal conditions and evaluate the safety level of coastal areas using the forward chaining inference method",
      tags: ["Typescript", "React", "Tailwind CSS"],
      category: [],
      repoLink: "https://github.com/Kahffi/Sistem_pakar",
      projectLink: "https://sistem-pakar-kelompok5.vercel.app",
    },
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
]