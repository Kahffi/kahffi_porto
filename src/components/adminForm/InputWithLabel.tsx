import { ComponentPropsWithoutRef } from "react";

export type LabelledTextInputData = {
  label: string;
  type: "text" | "text-area";
  dataID?: string;
  id: string;
};

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "type">;
type TextAreaProps = Omit<ComponentPropsWithoutRef<"textarea">, "type">;

type LabelledTextInputProps = LabelledTextInputData &
  (InputProps | TextAreaProps);

export default function LabelledTextInput(props: LabelledTextInputProps) {
  return (
    <label htmlFor={props.id} className="flex flex-col gap-1">
      <span>{props.label}</span>
      {props.type === "text" ? (
        <input
          id={props.id}
          data-id={props.dataID}
          name={props.name}
          value={props.value}
          onChange={(props as InputProps).onChange}
          type="text"
          className="bg-transparent border-white border rounded-sm p-1 focus:outline-none"
        />
      ) : (
        <textarea
          id={props.id}
          data-id={props.dataID}
          name={props.name}
          value={props.value}
          onChange={(props as TextAreaProps).onChange}
          className="bg-transparent border-white border rounded-sm p-1 focus:outline-none"
        />
      )}
    </label>
  );
}
