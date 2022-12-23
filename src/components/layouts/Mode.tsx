import { useState } from "react";

function Mode() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className="hidden lg:flex gap-3">
      <button
        className={`btn-primary hover:bg-purple-500 hover:text-white border border-purple-500 ${
          isDark && "bg-purple-500 text-white "
        }`}
      >
        DARK
      </button>
      <button
        className={`btn-primary border hover:bg-purple-500 hover:text-white border-purple-500 ${
          !isDark && "bg-purple-500 text-white "
        }`}
      >
        LIGHT
      </button>
    </div>
  );
}

export default Mode;
