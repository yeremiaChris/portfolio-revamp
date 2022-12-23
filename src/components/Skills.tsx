import { skillsStack } from "../constants/skills";
function Skills() {
  return (
    <section className="mt-10 lg:mt-20" id="skill">
      <h2 className="text-2xl font-medium text-green-500">skills()</h2>

      <div className="flex items-center justify-center lg:justify-start gap-20 flex-wrap mt-14">
        {skillsStack?.map((pElement) => (
          <div
            className="hover:-translate-y-3 transform w-24 box-center dark:bg-white transition ease-in-out duration-300 cursor-pointer h-24 rounded-full shadow-lg p-4"
            key={pElement}
          >
            <img src={`/img/${pElement}.png`} alt={pElement} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
