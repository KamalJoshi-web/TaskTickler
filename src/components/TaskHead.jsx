import React, { useEffect, useState } from "react";
import LightModeIcon from "../assets/icon-sun.svg";
import DarkModeIcon from "../assets/icon-moon.svg";

const TaskHead = () => {
  const [themeMode, setThemeMode] = useState(true);

  const handleThemeMode = () => {
    if (themeMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
    setThemeMode(!themeMode);
  };

  useEffect(() => {
    if (
      localStorage.mode === "dark" ||
      (!("mode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setThemeMode(false);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className=" flex justify-between items-center mb-5">
      {/* Heading */}
      <h1 className=" font-Josefin font-bold tracking-[0.2em] text-4xl text-VeryLightGray">
        TaskTickler
      </h1>
      {/* Themes */}
      <button onClick={handleThemeMode}>
        {themeMode ? (
          <img src={DarkModeIcon} alt=" Switch to Dark Mode" />
        ) : (
          <img src={LightModeIcon} alt=" Switch to Light Mode" />
        )}
      </button>
    </div>
  );
};

export default TaskHead;
