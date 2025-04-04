"use client";

import { LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {LINKS.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
