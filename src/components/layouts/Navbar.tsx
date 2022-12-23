import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const menus = ["home", "about", "skill", "companies", "recentWorks"];

function Navbar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // handle onscroll

    let cleanUp = false;
    if (!cleanUp) {
      window.onscroll = (e) => {
        if (window.scrollY > 0) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
    }

    return () => {
      cleanUp = false;
    };
  }, [isScroll]);

  return (
    <nav
      className={`sticky top-0 z-50 duration-300 text-gray-500 ${isScroll && "bg-white shadow"}`}
    >
      <div className="container box-between py-5">
        <div className="font-bold">
          YERE<span className="text-yellow-500">MIA</span>
        </div>

        <div className="lg:flex gap-5 hidden text-sm uppercase font-medium">
          {menus?.map((sElement) => (
            <Link
              to="#"
              className="hover:border-b-2 hover:border-purple-500 inline-block px-4 py-2 rounded-full text-gray-600"
            >
              {sElement}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-3">
          <button
            className={`btn-primary hover:bg-purple-500 hover:text-white border border-purple-500 ${
              isDark && "bg-purple-500 text-white "
            }`}
          >
            DARK
          </button>
          <button
            className={`btn-primary border hover:bg-purple-500 hover:text-white border-purple-500 ${
              !isDark && "bg-purple-500 text-white "
            }`}
          >
            LIGHT
          </button>
        </div>

        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
