import { Link } from "react-router-dom";
import { boxes } from "../constants/about";
const handleRoute = (id: string) => {
  let link = document.getElementById(id);
  link &&
    window.scrollTo({
      top: link.offsetTop - 110,
      behavior: "smooth",
    });
};

function About() {
  return (
    <section className="mt-10 lg:mt-20" id="about">
      <h2 className="text-2xl font-medium text-green-500" id="about">
        aboutMe()
      </h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        <p className="text-lg leading-9">
          I'm a Front-end web developer. I specialize in JavaScript, Typescript and have
          professional experience working with NuxtJs and TailwindCSS. I like to code because with
          coding I can create something that I like and usefull for me and others. My hobby is
          playing piano.
        </p>

        <div className="grid grid-rows-2 gap-5">
          {boxes?.map((pElement, pIndex) => (
            <div
              key={pIndex}
              className="hover:-translate-y-2 bg-white dark:text-black transform duration-300 py-5 px-7 box-between border rounded-lg shadow-xl cursor-pointer justify-center"
            >
              <div className="flex flex-col gap-3 ">
                <h2 className="text-2xl font-medium">{pElement.title}</h2>
                {pElement.hash ? (
                  <Link
                    to={pElement.link}
                    onClick={() => handleRoute(pElement.hash)}
                    className="inline-block text-green-700 underline"
                  >
                    {pElement.linkTitle}
                  </Link>
                ) : (
                  <a
                    href={pElement.link}
                    target="_blank"
                    className="inline-block text-green-700 underline"
                  >
                    {pElement.linkTitle}
                  </a>
                )}
              </div>

              <span className="text-green-500 font-bold text-xl">
                {pIndex === 0 ? `</>` : "{}"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
