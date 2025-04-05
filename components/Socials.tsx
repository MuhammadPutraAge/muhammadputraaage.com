import { SOCIALS } from "@/constants";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface Props {
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  iconClassName?: string;
}

const Socials = ({ containerClassName, iconClassName }: Props) => {
  return (
    <div className={containerClassName}>
      {SOCIALS.map((social) => (
        <Link
          key={social.path}
          href={social.path}
          className={iconClassName}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
