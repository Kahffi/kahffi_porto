import { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";
import LabelWithIcon from "./ui/LabelsWithIcon";
import GradientText from "./ui/GradientText";
import wavingHand from "../assets/noto--waving-hand.svg";

import SkillCard from "./ui/SkillCard";
import { Skill, Tool } from "../hooks/usePortofolioData";

import { usePageContext } from "../contexts/PageContextProvider";

interface Props extends ComponentPropsWithoutRef<"div"> {
  id: string;
  aboutContent: AboutContent;
}

type AboutContent = {
  selfInfo: string;
  skills: Skill[];
  tools: Tool[];
};

type ParsedText = {
  text: string;
  highlighted: boolean;
};

export default function About(props: Props) {
  const { activeId } = usePageContext()!;
  const [animateHand, setAnimateHand] = useState(false);

  useEffect(() => {
    if (animateHand) return;

    if (activeId === props.id) {
      setAnimateHand(true);
    }
  }, [animateHand, activeId, props.id]);

  const parsedText = useMemo<ParsedText[]>(() => {
    const regex = /\*\*(.*?)\*\*/g;
    let match;
    let lastIndex = 0;
    const result: ParsedText[] = [];

    while ((match = regex.exec(props.aboutContent.selfInfo)) != null) {
      const matchStart = match.index;
      const matchEnd = regex.lastIndex;

      // Add normall text before the match
      if (matchStart > lastIndex) {
        result.push({
          highlighted: false,
          text: props.aboutContent.selfInfo.slice(lastIndex, matchStart),
        });

        // Add highlighted text (match[1])
        result.push({
          text: match[1],
          highlighted: true,
        });

        lastIndex = matchEnd;
      }
    }
    // add remaining normal text after the last match
    if (lastIndex < props.aboutContent.selfInfo.length) {
      result.push({
        highlighted: false,
        text: props.aboutContent.selfInfo.substring(lastIndex),
      });
    }

    return result;
  }, [props.aboutContent]);

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
          {/* Render the normal and highlighted text */}
          {parsedText.map((textPart, idx) => {
            return textPart.highlighted ? (
              <GradientText key={`highlightedIntroText${idx}`}>
                {textPart.text}
              </GradientText>
            ) : (
              textPart.text
            );
          })}
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
            {props.aboutContent.skills.length > 0 &&
              props.aboutContent.skills.map((skill, idx) => {
                return (
                  <SkillCard
                    icon={skill.icon}
                    skill={skill.skillName}
                    key={`skillCard${idx}`}
                  />
                );
              })}
          </ul>
        </section>
        <section className="flex flex-col gap-3">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text w-fit">
            Tools Under My Belt
          </h3>
          <ul className=" font-semibold flex flex-wrap justify-center gap-5 py-3 px-2">
            {props.aboutContent.tools.map((tool) => {
              return (
                <li
                  key={`tool-list-${tool.toolName}`}
                  className="border border-slate-700 rounded-md shadow-md"
                >
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    <LabelWithIcon icon={tool.icon} text={tool.toolName} />
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
