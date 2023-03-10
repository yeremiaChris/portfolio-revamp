import React from "react";
import { Link } from "react-router-dom";
import { logos } from "../constants/home";

function Home() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 uppercase mt-10 lg:mt-20" id="home">
      {/* img banner */}
      <div className="box-center relative">
        <img
          className="img-shadow w-3/4 z-10 drop-shadow-lg"
          src="/img/my-picture.png"
          alt="banner"
        />

        {/* skill's logos */}
        {logos?.map((pElement) => (
          <div key={pElement.name} className={`absolute dark:bg-purple-100 ${pElement.class}`}>
            <img
              src={`/img/${pElement.name}.png`}
              className={`${pElement.name === "nuxt" ? "w-1/2" : "w-10"}`}
              alt={pElement.name}
            />
          </div>
        ))}
      </div>

      {/* content */}
      <div className="lg:pt-32 text-xl lg:text-3xl text-gray-700 dark:text-white tracking-widest ">
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
        <div className="flex flex-wrap gap-3 text-sm mt-5 lg:mt-10">
          <a
            href="https://github.com/yeremiaChris/"
            target="_blank"
            className="bg-green-400 text-gray-500 btn-secondary"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yeremia-chris-saragi-587a671a9/"
            target="_blank"
            className="bg-purple-500 text-white btn-secondary"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
