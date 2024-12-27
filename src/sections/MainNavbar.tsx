"use client";

// React and Next Imports
import React, { useEffect } from "react";
import Link from "next/link";

// Constants
import { navItems, NavLink } from "@/constants/website";

// Use Scramble
import { useScramble } from "use-scramble";

// Lucide Icons
import { Menu, X } from "lucide-react";

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

const NavItem = ({ name, href, target }: NavLink) => {
  return (
    <li className="nav-li">
      <a href={href} className="text-neutral-400 hover:text-white transition-colors nav-li_a" target={target}>
        {name}
      </a>
    </li>
  );
};

interface NavItemsProps {
  navLinks: NavLink[];
}

const NavItems = ({ navLinks }: NavItemsProps) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ name, href, target }) => (
        <NavItem key={name} name={name} href={href} target={target} />
      ))}
    </ul>
  );
};

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Navbar

export default function MainNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, replay } = useScramble({
    text: "Chris",
    speed: 0.5,
    overdrive: false,
    playOnMount: false,
  });

  useEffect(() => {
    // Initial timeout for 1 second
    const timeoutId = setTimeout(() => {
      replay();

      // Start interval after the initial replay
      const intervalId = setInterval(() => {
        replay();
      }, 3500);

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, 1000); // 1 second

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [replay]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="sticky backdrop-blur-sm top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link ref={ref} onMouseOver={replay} href="/#hero" className="text-neutral-400 font-bold text-xl" />
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav className="sm:flex hidden">
            <NavItems navLinks={navItems} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems navLinks={navItems} />
        </nav>
      </div>
    </header>
  );
}
