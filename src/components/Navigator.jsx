// The right-side navigator

import { useEffect, useState } from "react";

import "../assets/stylesheets/navigator.css";

const Navigator = () => {
  const [activeDiv, setActiveDiv] = useState(null);
  const [divVisible, setDivVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 6200);

    // Handle visibilities when scrolling through sections
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutStart = document.getElementById("about-navigate");
      const aboutSection = document.getElementById("about");
      const projectsStart = document.getElementById("projects-navigate");
      const projectsSection = document.getElementById("projects");
      const publicationsStart = document.getElementById(
        "publications-navigate",
      );
      const publicationsSection = document.getElementById("releases");
      const endingStart = document.getElementById("ending-navigate");
      const endingSection = document.getElementById("ending");

      /**
       * offsetTop === the distance from the top of the page to the div
       * offsetHeight === the height of the div
       * ALL ARE MEASURED IN 'px'
       */
      if (scrollY < aboutStart?.offsetTop) {
        setActiveDiv(null);
      }

      if (
        scrollY >= aboutStart?.offsetTop &&
        scrollY <= aboutStart?.offsetTop + aboutSection?.offsetHeight
      ) {
        setActiveDiv(0);
      } else if (
        scrollY >= projectsStart?.offsetTop &&
        scrollY <= projectsStart?.offsetTop + projectsSection?.offsetHeight
      ) {
        setActiveDiv(1);
      } else if (
        scrollY >= publicationsStart?.offsetTop &&
        scrollY <=
          publicationsStart?.offsetTop + publicationsSection?.offsetHeight
      ) {
        setActiveDiv(2);
      } else if (
        scrollY >= endingStart?.offsetTop &&
        scrollY <= endingStart?.offsetTop + endingSection?.offsetHeight
      ) {
        setActiveDiv(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(divTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Items for the right-side navigator
  const navItems = ["About", "Projects", "Publications"];

  return (
    <div
      id="navigator"
      className={`navigator div-effect ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <li
              key={index}
              className={`navigator-list-items mb-1 ${index === activeDiv ? "scale-105 text-orange-400" : ""}`}
            >
              <p
                className={`navigator-text text-orange-400 ${index === activeDiv ? "opacity-100" : "opacity-0"}`}
              >
                {navItem}
              </p>
              <span className="ml-1 opacity-100">●</span>
            </li>
          );
        })}
        <li
          className={`navigator-list-items ${activeDiv === 3 ? "scale-105 text-red-500" : ""}`}
        >
          <p
            className={`navigator-text text-red-500 ${activeDiv === 3 ? "opacity-100" : "opacity-0"}`}
          >
            SURPRISED!!!
          </p>
          <span
            className={`ml-1 opacity-0 ${activeDiv === 3 ? "opacity-100" : ""}`}
          >
            ★
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navigator;
