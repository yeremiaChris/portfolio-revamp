import { works } from "../constants/recentWorks";
function Works() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-medium text-green-500">recentWorks()</h2>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {works?.map((pElement, pIndex) => (
          <div className="border-2 border-purple-400 p-3 shadow-xl">
            <img src={`/img/works/${pIndex}.png`} className="h-48" alt="mami" />
            <h2 className="mt-3 text-gray-600">{pElement}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
