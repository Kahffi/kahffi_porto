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

  const startDateFormatted = new Date(experience.startDate).toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
    }
  );
  const endDateFormatted = new Date(experience.endDate || "").toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
    }
  );
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="flex items-start gap-6 w-full"
    >
      {/* Company logo goes here */}
      <div className="flex flex-col items-center z-10">
        <div className="w-14 h-14 bg-white border-4 border-gray-500 rounded-full flex items-center justify-center overflow-hidden">
          <img
            className="object-cover"
            src={experience.companyImage}
            alt={`photo of ${experience.companyName}`}
          />
        </div>
      </div>
      {/*  */}
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
            {startDateFormatted}
            <span>
              {" "}
              ~ {experience.currentlyWorkHere ? "Present" : endDateFormatted}
            </span>
          </p>
        </div>

        {/* expandable */}
        <div
          ref={expandableRef}
          className={`overflow-hidden transition-all mt-2 ${
            isActive ? "visible" : "invisible"
          }`}
          style={{ height: expandableHeight }}
        >
          {/* location and experience type */}
          <div className="flex items-center text-base text-gray-300 mb-2">
            <Icon icon={"mdi:location"} className="inline mr-2" />
            <span> {experience.location}</span>
          </div>
          <p>{experience.summary}</p>
        </div>
      </div>
    </div>
  );
}
