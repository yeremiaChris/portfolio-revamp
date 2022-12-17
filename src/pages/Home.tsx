import React from "react";

function Home() {
  return (
    <div className="grid grid-cols-2 uppercase mt-14">
      {/* img banner */}
      <div className="box-center relative">
        <img
          className="img-shadow w-3/4 z-10 drop-shadow-lg"
          src="/img/my-picture.png"
          alt="banner"
        />
      </div>

      {/* content */}
      <div className="pt-32 text-3xl font-medium">
        <h2>
          HI, I'M YEREMIA <br /> CHRIS SARAGI.
        </h2>
        <h2 className="mt-5">
          "A FRONTEND WEB DEVELOPER <br />
          Experienced in Javascript and Typescript Technology"
        </h2>

        {/* social media */}
        <div className="flex gap-3 text-sm mt-10">
          <button className="bg-green-400 text-gray-500 btn-secondary">Github</button>
          <button className="bg-purple-500 text-white btn-secondary">Linkedin</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
