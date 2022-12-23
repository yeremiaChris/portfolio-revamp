import { useState, useEffect } from "react";

const modes = ["dark", "light"];

function Mode() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    let cleanUp = false;
    if (!cleanUp) {
      const theme = localStorage.theme;
      if (theme === "dark") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }

    return () => {
      cleanUp = true;
    };
  }, []);

  const handleClick = (mode: string) => {
    const html = document.documentElement;
    localStorage.theme = mode;

    if (mode === "dark") {
      html.classList.add(mode);
    } else {
      html.classList.remove("dark");
    }

    if (mode === "dark") {
      setIsDark(true);
    } else setIsDark(false);
  };

  return (
    <div className="flex gap-3">
      {modes?.map((sElement) => (
        <button
          key={sElement}
          className={`uppercase btn-primary hover:bg-purple-500 hover:text-white dark:text-white border border-purple-500 ${
            isDark && sElement === "dark" && "bg-purple-500 text-white"
          } ${!isDark && sElement === "light" && "bg-purple-500 text-white"}`}
          onClick={() => handleClick(sElement)}
        >
          {sElement}
        </button>
      ))}

      {/* <button
        className={`btn-primary border hover:bg-purple-500 hover:text-white border-purple-500 ${
          !isDark && "bg-purple-500 text-white "
        }`}
      >
        LIGHT
      </button> */}
    </div>
  );
}

export default Mode;
