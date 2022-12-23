import React from "react";
import Menus from "./Menus";
import Mode from "./Mode";

type IMobileNavbar = {
  isMobile: boolean;
  handleClick: () => void;
};

function MobileNavbar({ isMobile, handleClick }: IMobileNavbar) {
  return (
    <div
      className={`${
        !isMobile && "-translate-y-[2000px]"
      } duration-300 ease-in-out transform fixed flex flex-col inset-0 dark:bg-black bg-white p-6`}
    >
      <div className="font-bold mb-4 flex justify-between items-center">
        <div>
          YERE<span className="text-yellow-500">MIA</span> {isMobile}
        </div>
        <button className="mb-5 text-black self-end" onClick={() => handleClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 dark:stroke-white stroke-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mb-5">
        <Menus handleClick={() => handleClick()} />
      </div>

      <Mode />
    </div>
  );
}

export default MobileNavbar;
