import { Icon } from "@iconify/react";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & {
  icon: string;
  label?: string;
};

export default function SocialItem({ icon, label, className, ...rest }: Props) {
  return (
    <a target="_blank" className={className} {...rest}>
      <Icon icon={icon} fontSize={"1em"} />
      {label && <span>{label}</span>}
    </a>
  );
}
