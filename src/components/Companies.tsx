import React from "react";
import Card, { CardProps } from "./companies/Card";

const companies: CardProps[] = [
  {
    companyLabel: "Primaku",
    companyType: "Startup",
    date: "April 2022 (current)",
    workType: "Parttime",
    link: "https://primaku.com/",
    src: "/img/primaku.png",
  },
  {
    companyLabel: "KiriminAja",
    companyType: "Startup",
    date: "April 2022 (current)",
    workType: "Fulltime",
    link: "https://kiriminaja.com/",
    src: "https://storage.googleapis.com/kaj-dev-dshbd-v2/public/svg/global/logo.svg",
  },
  {
    companyLabel: "ICreativeLabs",
    companyType: "IT Consultant",
    date: "April 2021 - May 2023",
    workType: "Fulltime",
    link: "https://kiriminaja.com/",
    src: "/img/icl.png",
  },
];
function Companies() {
  return (
    <section className="mt-10 lg:mt-20" id="companies">
      <h2 className="text-2xl font-medium text-green-500 mb-10">companies()</h2>
      <div className="mt-6 grid lg:grid-cols-2 gap-10">
        {companies.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Companies;
