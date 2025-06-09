import { ChangeEvent } from "react";
import LabelWithIcon from "../ui/LabelsWithIcon";
import LabelledTextInput from "./InputWithLabel";

type Props = {
  id: string;
  value: string;
  icon: string;
  sectionName: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  deleteHandler: (id: string) => void;
  idx: number;
};

export default function TextAndIconInput({
  id,
  icon,
  value,
  changeHandler,
  deleteHandler,
  idx,
  sectionName,
}: Props) {
  sectionName = sectionName.toLowerCase();

  return (
    <div className="flex flex-col border p-2">
      <div className="flex justify-between">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          <LabelWithIcon icon={icon} text={value} />
        </div>
        <button
          type="button"
          className="bg-red-400 p-2"
          onClick={() => deleteHandler(id)}
        >
          Delete
        </button>
      </div>
      <div>
        <LabelledTextInput
          id={`${sectionName}${id}Name`}
          dataID={id}
          label={`${sectionName} ${idx + 1} Name`}
          name={`${sectionName}Name`}
          onChange={changeHandler}
          type="text"
          value={value}
        />
        <LabelledTextInput
          id={`${sectionName}${id}Name`}
          label={`${sectionName} ${idx + 1} Icon`}
          type="text"
          name="icon"
          dataID={id}
          value={icon}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}
