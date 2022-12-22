import { skillsStack } from "../constants/skills";
function Skills() {
  return (
    <div className="mt-10 lg:mt-20">
      <h2 className="text-2xl font-medium text-green-500">skills()</h2>

      <div className="flex items-center justify-center lg:justify-start gap-28 flex-wrap mt-14">
        {skillsStack?.map((pElement) => (
          <img src={`/img/${pElement}.png`} key={pElement} alt={pElement} className="w-20" />
        ))}
      </div>
    </div>
  );
}

export default Skills;
