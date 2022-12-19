import React from "react";
import Navbar from "../components/layouts/Navbar";

type TemplateProps = {
  children: React.ReactElement;
};

function Default({ children }: TemplateProps) {
  return (
    <div className="m-auto mb-20">
      <Navbar />

      <main className="container">{children}</main>
    </div>
  );
}

export default Default;
