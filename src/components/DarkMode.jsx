import { useEffect, useState } from "react";

import sun from "../../public/sun.png";
import moon from "../../public/moon.png";

const DarkMode = () => {
  /**
   * Default value of theme will be the value of the key 'theme' set in the localStorage
   * If the value of the key 'theme' is null, set it to 'light'
   */
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /**
   * Toggle the Theme when clicking the button
   * If the previous theme is light, switch it to dark
   * Else, switch it to light which is default theme
   */
  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <button
      id="dark-mode"
      onClick={toggleTheme}
      className={`absolute right-10 flex self-center transition duration-200 ${theme === "light" ? "" : "-translate-x-9"}`}
    >
      <img
        src={sun}
        title="Switch to Dark Mode"
        aria-label="Switch to Dark Mode"
        className={`size-9 cursor-pointer transition duration-200 hover:brightness-120 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
      />
      <img
        src={moon}
        title="Switch to Light Mode"
        aria-label="Switch to Light Mode"
        className={`size-9 cursor-pointer transition duration-200 hover:brightness-120 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
      />
    </button>
  );
};

export default DarkMode;
