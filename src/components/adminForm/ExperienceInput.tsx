import LabelledTextInput from "./InputWithLabel";
import { Experience } from "../../hooks/usePortofolioData";
import { ChangeEvent } from "react";

type Props = {
  experience: Experience;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
};

export default function ExperienceInput({
  experience,
  onChange,
  onDelete,
}: Props) {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  const startDateMax = now.toISOString().split("T")[0];
  const endDateMin = experience.startDate?.toISOString().split("T")[0];

  const startDateString = experience.startDate?.toISOString().split("T")[0];
  const endDateString = experience.endDate?.toISOString().split("T")[0];

  return (
    <div className="border p-3">
      <button
        type="button"
        onClick={() => onDelete(experience.id)}
        className="bg-red-400 p-2 mb-2 w-full"
      >
        Delete
      </button>
      <div className="grid grid-cols-2 gap-3">
        <LabelledTextInput
          id={`experience-${experience.id}-companyName`}
          label="Company Name"
          type="text"
          dataID={experience.id}
          name="companyName"
          value={experience.companyName}
          onChange={onChange}
        />
        <LabelledTextInput
          id={`experience-${experience.id}-role`}
          label="Role"
          type="text"
          dataID={experience.id}
          name="role"
          value={experience.role}
          onChange={onChange}
        />
        <LabelledTextInput
          id={`experience-${experience.id}-link`}
          label="Link"
          type="text"
          dataID={experience.id}
          name="companyLink"
          value={experience.companyLink}
          onChange={onChange}
        />
        <LabelledTextInput
          id={`experience-${experience.id}-location`}
          label="Location"
          type="text"
          dataID={experience.id}
          name="location"
          value={experience.location}
          onChange={onChange}
        />
        <LabelledTextInput
          id={`experience-${experience.id}-summary`}
          label="Summary"
          type="text-area"
          dataID={experience.id}
          name="summary"
          value={experience.summary}
          onChange={onChange}
        />
        <label
          htmlFor={`experience-${experience.id}-workHere`}
          className="flex gap-4"
        >
          <span>Currently work here?</span>
          <input
            type="checkbox"
            id={`experience-${experience.id}-workHere`}
            data-id={experience.id}
            name="currentlyWorkHere"
            checked={experience.currentlyWorkHere}
            onChange={onChange}
          />
        </label>
        <label htmlFor={`experience-${experience.id}-startDate`}>
          <p className="mb-1">Start date</p>
          <input
            type="date"
            id={`experience-${experience.id}-startDate`}
            onChange={onChange}
            data-id={experience.id}
            name="startDate"
            max={startDateMax}
            value={startDateString}
            className="w-full bg-transparent border p-2 outline-none"
          />
        </label>

        <label htmlFor={`experience-${experience.id}-endDate`}>
          <p className="mb-1">End date</p>
          <input
            type="date"
            id={`experience-${experience.id}-endDate`}
            onChange={onChange}
            data-id={experience.id}
            name="endDate"
            min={endDateMin}
            value={endDateString}
            className="w-full bg-transparent border p-2 outline-none"
          />
        </label>
      </div>
    </div>
  );
}
