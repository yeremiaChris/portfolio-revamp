import React from "react";

function Companies() {
  return (
    <section className="mt-10 lg:mt-20" id="companies">
      <h2 className="text-2xl font-medium text-green-500 mb-10">companies()</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        <div className="flex gap-5 items-center">
          <img
            src="/img/icl.png"
            alt="icl"
            className="h-[120px] md:h-[200px] hover:-translate-y-3 transform duration-300"
          />
          <div className="grid gap-1">
            <h2>April 2021 (current)</h2>
            <h2 className="text-2xl font-medium">
              ICreativeLabs <span className="text-sm font-normal">Fulltime</span>
            </h2>
            <p>IT Consultant Company</p>
            <p>Frontend Developer</p>
            <a
              href="https://icreativelabs.com/"
              target="_blank"
              className="text-green-500 text-sm underline"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img
            src="/img/primaku.png"
            alt="primaku"
            className="h-[120px] md:h-[200px] rounded-full hover:-translate-y-3 transform duration-300"
          />
          <div className="grid gap-1">
            <h2>April 2022 (current)</h2>
            <h2 className="text-2xl font-medium">
              Primaku <span className="text-sm font-normal">Parttime</span>
            </h2>
            <p>IT Consultant Company</p>
            <p>Frontend Developer</p>
            <a
              href="https://primaku.com/"
              target="_blank"
              className="text-green-500 text-sm underline"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
