import { Link } from "react-router-dom";
import { boxes } from "../constants/about";
function About() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-medium text-green-500">aboutMe()</h2>
      <div className="mt-6 grid grid-cols-2 gap-10">
        <p className="text-lg leading-9">
          I'm a Front-end web developer. I specialize in JavaScript, Typescript and have
          professional experience working with NuxtJs and TailwindCSS. I like to code because with
          coding I can create something that I like and usefull for me and others. My hobby is
          playing piano.
        </p>

        <div className="grid grid-rows-2 gap-5">
          {boxes?.map((pElement, pIndex) => (
            <div className="hover:-translate-y-2 transform duration-300 py-5 px-7 box-between border rounded-lg shadow-xl cursor-pointer justify-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">{pElement.title}</h2>
                <Link to={pElement.link} className="inline-block text-green-700 underline">
                  {pElement.linkTitle}
                </Link>
              </div>

              <span className="text-green-500 font-bold text-xl">
                {pIndex === 0 ? `</>` : "{}"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
