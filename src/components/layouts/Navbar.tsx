import React, { useEffect, useState } from "react";

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
      className={`sticky top-0 z-50 duration-300 ${
        isScroll && "backdrop-blur shadow-xl font-medium"
      }`}
    >
      <div className="container box-between py-5">
        <div className="font-bold">
          YERE<span className="text-yellow-500">MIA</span>
        </div>

        <ul className="lg:flex gap-5 hidden">
          <li className="text-purple-600">HOME</li>
          <li className="">ABOUT</li>
          <li className="">WORKS</li>
        </ul>

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
