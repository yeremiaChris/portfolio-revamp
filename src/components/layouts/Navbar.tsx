import React from "react";

function Navbar() {
  return (
    <nav className="">
      <div className="container box-between py-5">
        <div className="font-bold">
          YERE<span className="text-yellow-500">MIA</span>
        </div>

        <ul className="flex gap-5">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORKS</li>
        </ul>

        <div className="flex gap-3">
          <button className="btn-primary">DARK</button>
          <button className="btn-primary">LIGHT</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
