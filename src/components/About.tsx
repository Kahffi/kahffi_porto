import {
  ComponentPropsWithoutRef,
  useContext,
  useEffect,
  useState,
} from "react";
import LabelWithIcon from "./ui/LabelsWithIcon";
import GradientText from "./ui/GradientText";
import wavingHand from "../assets/noto--waving-hand.svg";
import { PageContext } from "../contexts/PageContext";

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
  const { activeId } = useContext(PageContext)!;
  const [animateHand, setAnimateHand] = useState(false);

  useEffect(() => {
    if (animateHand) return;

    if (activeId === props.id) {
      setAnimateHand(true);
    }
  }, [animateHand, activeId, props.id]);
  return (
    <div
      id={props.id}
      className="w-full max-w-screen-lg flex gap-10 md:justify-around flex-col md:flex-row md:items-center"
    >
      <section className="max-w-[600px] flex flex-col gap-5 flex-1">
        <h2 className="text-6xl font-bold">
          Hello{" "}
          <span className="transform">
            <img
              src={wavingHand}
              alt=""
              width={"50px"}
              className={`inline ${
                animateHand && "animate-waving_hand"
              } transform scale-x-[-1]`}
            />
          </span>
          <br /> I'm Daffa
        </h2>
        <p className="text-xl font-medium">
          I have a deep passion and boundless curiosity in{" "}
          <GradientText>Software Development</GradientText>, the{" "}
          <GradientText>Internet of Things</GradientText>, and{" "}
          <GradientText>Artificial Intelligence</GradientText>. I thrive on
          bringing innovative ideas to life, whether through impactful
          applications, cutting-edge hardware, or a seamless fusion of both.
        </p>
      </section>
      <div className="flex flex-col gap-5 md:min-h-full flex-1">
        <section className="flex flex-col gap-3">
          <GradientText
            fromColor="blue-400"
            toColor="purple-400"
            textSize="3xl"
            fontWeight="bold"
          >
            Skills
          </GradientText>
          <ul className="flex flex-col gap-3 py-3 px-2 font-semibold">
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
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text w-fit">
            Tools Under My Belt
          </h3>
          <ul className=" font-semibold flex flex-wrap justify-center gap-5 py-3 px-2">
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
