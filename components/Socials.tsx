import Link from "next/link";
import { HTMLAttributes } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/muhammadputraage" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/muhammadputraage" },
  { icon: <FaInstagram />, path: "https://instagram.com/mputraage" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@putramonk1495" },
];

interface Props {
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  iconClassName?: string;
}

const Socials = ({ containerClassName, iconClassName }: Props) => {
  return (
    <div className={containerClassName}>
      {socials.map((social) => (
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
