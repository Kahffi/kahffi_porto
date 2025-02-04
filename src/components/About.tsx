import { ComponentPropsWithoutRef, useState } from "react";
import LabelWithIcon from "./ui/LabelsWithIcon";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
}

export default function About(props: Props) {
  const [skills] = useState<{ skill: string; icon: string }[]>([
    { skill: "Web Development", icon: "mdi:web" },
    { skill: "Sensors & Microcontrollers", icon: "mdi:chip" },
    { skill: "Internet of Things", icon: "mdi:wifi" },
  ]);
  const [tools] = useState<{ tool: string; icon: string }[]>([
    { tool: "React.JS", icon: "mdi:react" },
    { tool: "JavaScript", icon: "mdi:language-javascript" },
    { tool: "TypeScript", icon: "mdi:language-typescript" },
    { tool: "C++ (Arduino)", icon: "mdi:language-cpp" },
    { tool: "Figma", icon: "mdi:figma" },
    { tool: "Firebase", icon: "mdi:firebase" },
    { tool: "Python", icon: "mdi:language-python" },
    { tool: "HTML", icon: "mdi:language-html5" },
    { tool: "Tailwind CSS", icon: "mdi:tailwind" },
    { tool: "CSS", icon: "mdi:language-css3" },
    { tool: "SQL", icon: "mdi:database" },
  ]);
  return (
    <div
      id={props.id}
      className="w-full max-w-screen-lg flex gap-10 md:justify-around flex-col md:flex-row md:items-center"
    >
      <section className="max-w-[600px] flex flex-col gap-5 flex-1">
        <h2 className="text-6xl font-bold">
          Hello,
          <br /> I'm Daffa
        </h2>
        <p className="text-xl font-medium">
          I'm highly excited to bring amazing ideas comes to life, whether it's
          developing useful applications, impactful hardwares, or both.
        </p>
      </section>
      <div className="flex flex-col gap-5 md:min-h-full flex-1">
        <section className="flex flex-col gap-3">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text w-fit">
            Skills
          </h3>
          <ul className="flex flex-col gap-3 text-xl py-3 px-2 font-semibold">
            {skills.map((skill) => {
              return (
                <li
                  key={`skill-list-${skill.skill}`}
                  className="border border-slate-700 rounded-md shadow-md w-fit"
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    <LabelWithIcon icon={skill.icon} text={skill.skill} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text w-fit">
            Tools Under My Belt
          </h3>
          <ul className="text-lg font-semibold flex flex-wrap justify-center gap-5 py-3 px-2">
            {tools.map((tool) => {
              return (
                <li
                  key={`tool-list-${tool.tool}`}
                  className="border border-slate-700 rounded-md shadow-md"
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    <LabelWithIcon icon={tool.icon} text={tool.tool} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
