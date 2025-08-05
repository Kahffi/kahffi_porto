import { PROJECTS } from "../constants/Project";
import ProjectCard from "./ProjectCard";

import { Icon } from "@iconify/react/dist/iconify.js";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="max-w-screen-lg  min-h-[75vh] flex flex-col items-center gap-16  scroll-mt-20"
    >
      <h2 className="text-2xl font-semibold text-center">
        Projects I've Worked On
      </h2>
      <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2">
        {PROJECTS.map((p) => {
          return <ProjectCard key={p.title} project={p} />;
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
          <span className="w-full underline text-black"></span>
        </span>{" "}
      </p>
    </div>
  );
}
