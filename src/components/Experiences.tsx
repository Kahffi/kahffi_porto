import { ComponentPropsWithoutRef } from "react";
import ExperienceItem from "./ExperienceItem";
import { Experience } from "../hooks/usePortofolioData";

interface Props extends ComponentPropsWithoutRef<"div"> {
  experiences: Experience[];
}

export default function Experiences(props: Props) {
  return (
    <div id={props.id} className="w-full">
      <div>
        <h3 className="text-2xl font-bold mb-7">Past Experiences</h3>
        {/* Vertical Line */}
        <div className="relative flex flex-col gap-7">
          <div className="absolute w-1 h-full top-0 bg-gray-600 ml-[1.65rem] z-0" />
          {props.experiences.map((exp) => (
            <ExperienceItem
              key={`experience-card-${exp.id}`}
              experience={exp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
