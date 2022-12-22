import { skillsStack } from "../constants/skills";
function Skills() {
  return (
    <div className="mt-10 lg:mt-20">
      <h2 className="text-2xl font-medium text-green-500">skills()</h2>

      <div className="flex items-center justify-center lg:justify-start gap-20 flex-wrap mt-14">
        {skillsStack?.map((pElement) => (
          <div className="w-24 box-center h-24 rounded-full shadow-lg p-4">
            <img src={`/img/${pElement}.png`} key={pElement} alt={pElement} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
