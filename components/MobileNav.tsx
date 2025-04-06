"use client";

import { usePathname } from "next/navigation";
import { RiMenu5Line } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { LINKS } from "@/constants";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <RiMenu5Line className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col px-8 h-screen overflow-y-scroll">
        <SheetTitle />
        <SheetDescription />

        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <p className="text-4xl font-semibold">
                Age<span className="text-accent">.</span>
              </p>
            </Link>
          </SheetClose>
        </div>

        <nav className="flex flex-col gap-8 justify-center items-center mb-40">
          {LINKS.map((link) => (
            <SheetClose key={link.path} asChild>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
