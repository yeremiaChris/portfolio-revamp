import Link from "next/link";

export const Header = () => {
  return (
    <header
      role="banner"
      className="max-w-5xl py-8 text-white mx-auto flex justify-between"
    >
      <p
        aria-label="Logo"
        className="bg-neutral-700 font-bold text-2xl w-8 h-8 flex items-center justify-center rounded-full text-center"
      >
        Y
      </p>
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex text-sm gap-10 text-neutral-400 font-semibold">
          <li>
            <Link
              href="/"
              className="text-green-400 hover:text-green-300 duration-300"
              aria-label="Go to Home section"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-green-300 duration-300"
              aria-label="Go to Experience section"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-green-300 duration-300"
              aria-label="Go to Projects section"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-green-300 duration-300"
              aria-label="Go to Contact section"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
