import React from "react";
import Navbar from "../components/layouts/Navbar";

type TemplateProps = {
  children: React.ReactElement;
};

function Default({ children }: TemplateProps) {
  return (
    <div className="m-auto mb-20">
      <main>{children}</main>
    </div>
  );
}

export default Default;
