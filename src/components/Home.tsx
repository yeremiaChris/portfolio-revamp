import React from "react";
import { logos } from "../constants/home";

function Home() {
  return (
    <div className="grid grid-cols-2 gap-10 uppercase mt-20">
      {/* img banner */}
      <div className="box-center relative">
        <img
          className="img-shadow w-3/4 z-10 drop-shadow-lg"
          src="/img/my-picture.png"
          alt="banner"
        />

        {/* skill's logos */}
        {logos?.map((pElement) => (
          <div key={pElement.name} className={`absolute ${pElement.class}`}>
            <img src={`/img/${pElement.name}.png`} className="w-3/4" alt="nuxtjs" />
          </div>
        ))}
      </div>

      {/* content */}
      <div className="pt-32 text-3xl text-gray-700 tracking-widest ">
        <h2 className="font-medium">
          <span className="text-purple-600 font-bold mr-2 animate-bounce inline-block">{"<>"}</span>
          HI, I'M YEREMIA <br /> CHRIS SARAGI.
        </h2>
        <h2 className="mt-5">
          "A FRONTEND WEB DEVELOPER <br />
          Experienced in Javascript and Typescript Technology"
          <span className="text-purple-600 font-bold ml-2 animate-bounce inline-block">
            {"</>"}
          </span>
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
