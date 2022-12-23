import { works } from "../constants/recentWorks";
function Works() {
  return (
    <section className="mt-20" id="recentWorks">
      <h2 className="text-2xl font-medium text-green-500">recentWorks()</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {works?.map((pElement, pIndex) => (
          <a
            href="#"
            key={pIndex}
            className="border-2 bg-white border-gray-100 flex flex-col p-3 hover:-translate-y-3 transform duration-300 shadow-xl"
          >
            <img
              src={`/img/works/${pElement.image}`}
              className="h-48 self-center"
              alt={pElement.title}
            />
            <h2 className="mt-3 text-gray-600 justify-self-center">{pElement.title}</h2>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Works;
