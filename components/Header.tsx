import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="wrapper py-8 xl:py-12 text-white flex items-center justify-between">
      <Link href="/">
        <p className="text-4xl font-semibold">
          Age<span className="text-accent">.</span>
        </p>
      </Link>

      <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
          <Button>Hire Me</Button>
        </Link>
      </div>

      <div className="xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
