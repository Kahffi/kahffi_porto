import { type ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {};

export default function CTAButton(props: Props) {
  return (
    <button type="button" className={`${props.className}`}>
      {props.children}
    </button>
  );
}
