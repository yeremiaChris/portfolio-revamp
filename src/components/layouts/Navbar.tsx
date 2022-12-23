import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Mode from "./Mode";
import { menus } from "../../constants/navbar";
import Menus from "./Menus";
function Navbar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const history = useNavigate();

  useEffect(() => {
    // handle onscroll

    let cleanUp = false;
    if (!cleanUp) {
      window.onscroll = (e) => {
        // active navbar base on id of sectioin

        const section = document.querySelectorAll("section");

        section.forEach((sec) => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 260;
          let height = sec.offsetHeight;

          let id = sec.getAttribute("id");
          if (id) {
            if (top >= offset && top < offset + height) {
              menus.map((item) => {
                item === id && history("#" + id);
              });
            }
          }
        });

        // last handle active navbar

        // handle user scroll
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

        <Menus />

        <Mode />

        {/* burger */}
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
