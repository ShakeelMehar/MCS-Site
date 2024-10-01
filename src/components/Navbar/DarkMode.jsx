import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = ({ theme, setTheme }) => {
  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme, element]); // Only runs when theme changes

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => setTheme("light")}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => setTheme("dark")}
          className="text-2xl cursor-pointer"
        />
      )}
    </>
  );
};

export default DarkMode;
