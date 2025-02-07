import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"span"> {
  fromColor?: string;
  toColor?: string;
  textSize?: string;
  fontWeight?: string;
}

export default function GradientText(props: Props) {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r text-${
        props.textSize
      } font-${props.fontWeight} from-${
        props.fromColor ? props.fromColor : "blue-400"
      } to-${props.toColor ? props.toColor : "purple-400"} w-fit`}
    >
      {props.children}
    </span>
  );
}
