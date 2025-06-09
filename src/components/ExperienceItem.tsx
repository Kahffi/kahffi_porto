import { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Experience } from "../hooks/usePortofolioData";

type Props = {
  experience: Experience;
};

export default function ExperienceItem({ experience }: Props) {
  const [isActive, setIsActive] = useState(false);
  const expandableRef = useRef<HTMLDivElement | null>(null);

  const expandableHeight = isActive
    ? expandableRef.current?.scrollHeight.toString() + "px"
    : "0px";

  return (
    <div
      key={`${experience.companyName}-${experience.role}`}
      onClick={() => setIsActive(!isActive)}
      className="flex items-start gap-6 w-full"
    >
      {/* Company logo goes here */}
      <div className="flex flex-col items-center z-10">
        <div className="w-14 h-14 border-2 border-gray-700 rounded-full bg-black" />
        {/* {idx !== props.experiences.length - 1 && (
        <div className="w-1 h-24 bg-gray-600" />
      )} */}
      </div>

      <div className="flex w-full flex-col cursor-pointer border border-blue-950/70 rounded-lg p-6 bg-blue-950/45 shadow-md hover:shadow-gray-800 transition-all">
        <div>
          <h3 className="text-xl font-semibold transition-all w-fit">
            {experience.role}
            <span className="font-normal text-gray-300 cursor-pointer">
              <span>{" @ "}</span>
              <a
                href={experience.companyLink}
                target="_blank"
                className="hover:underline hover:text-blue-400 transition-all"
              >
                {experience.companyName}
              </a>
            </span>
          </h3>
          <p className="text-gray-300">
            {experience.startDate?.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
            <span>
              {" "}
              ~{" "}
              {experience.currentlyWorkHere
                ? "Present"
                : experience.endDate?.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
            </span>
          </p>
        </div>

        {/* expandable */}

        <div
          ref={expandableRef}
          className={`overflow-hidden transition-all ${isActive ? "visible" : "invisible"}`}
          style={{ height: expandableHeight }}
        >
          {/* location and experience type */}
          <div className="flex items-center text-base text-gray-300">
            <Icon icon={"mdi:location"} className="inline mr-2" />
            <span> {experience.location}</span>
          </div>
          <p>{experience.summary}</p>
        </div>
      </div>
    </div>
  );
}
