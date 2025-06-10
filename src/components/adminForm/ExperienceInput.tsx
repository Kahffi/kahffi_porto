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
  now.setDate(now.getDate());
  const startDateMax = now.toISOString().split("T")[0];
  const endDateMin = experience.startDate;

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
          required
        />
        <LabelledTextInput
          id={`experience-${experience.id}-role`}
          label="Role"
          type="text"
          dataID={experience.id}
          name="role"
          value={experience.role}
          onChange={onChange}
          required
        />
        <LabelledTextInput
          id={`experience-${experience.id}-link`}
          label="Link"
          type="text"
          dataID={experience.id}
          name="companyLink"
          value={experience.companyLink}
          onChange={onChange}
          required
        />
        <LabelledTextInput
          id={`experience-${experience.id}-location`}
          label="Location"
          type="text"
          dataID={experience.id}
          name="location"
          value={experience.location}
          onChange={onChange}
          required
        />
        <LabelledTextInput
          id={`experience-${experience.id}-summary`}
          label="Summary"
          type="text-area"
          dataID={experience.id}
          name="summary"
          value={experience.summary}
          onChange={onChange}
          required
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
            value={experience.startDate}
            className="w-full bg-transparent border p-2 outline-none"
            required
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
            value={experience.endDate}
            className="w-full bg-transparent border p-2 outline-none"
          />
        </label>
        <input
          id={`experience-${experience.id}-companyImage`}
          type="file"
          onChange={onChange}
          name="companyImage"
          data-id={experience.id}
          className="bg-red-400 p-2 mb-2 w-full col-span-2"
        />
      </div>
    </div>
  );
}
