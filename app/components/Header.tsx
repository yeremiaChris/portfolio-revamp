"use client";
import { AlignVerticalJustifyEnd } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", label: "Home", isActive: true },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header
      role="banner"
      className="max-w-5xl py-5 md:py-8 px-5 text-white mx-auto flex  items-center justify-between"
    >
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        aria-label="Logo"
        className="bg-neutral-700 font-bold text-2xl w-8 h-8 flex items-center justify-center rounded-full text-center hover:bg-neutral-600 hover:scale-110 transition-all duration-300"
      >
        Y
      </motion.p>

      <nav role="navigation" aria-label="Main navigation">
        <ul className="hidden md:flex text-sm gap-10 text-neutral-400 font-semibold">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`${
                  item.isActive ? "text-green-400" : ""
                } hover:text-green-300 duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-300 after:transition-all after:duration-300 hover:after:w-full`}
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <AlignVerticalJustifyEnd className="text-neutral-500 md:hidden cursor-pointer" />
      </nav>
    </header>
  );
};
