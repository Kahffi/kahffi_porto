import { Icon } from "@iconify/react/dist/iconify.js";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"span"> {
  icon: string;
  text: string;
}

export default function LabelWithIcon(props: Props) {
  return (
    <span className="flex items-center w-fit gap-2 p-2  rounded-md" {...props}>
      <Icon icon={props.icon} width={"25px"} className="text-blue-400" />
      <p>{props.text}</p>
    </span>
  );
}
