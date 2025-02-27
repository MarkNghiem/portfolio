//The Navigation Bar - Sticky on top of the page

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../assets/stylesheets/navBar.css";

const NavBar = ({ scrollTo }) => {
  const [visible, setVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const navBarTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const leftTimer = setTimeout(() => {
      setLeftVisible(true);
    }, 4800);

    const rightTimer = setTimeout(() => {
      setRightVisible(true);
    }, 4000);

    return () => {
      clearTimeout(navBarTimer);
      clearTimeout(leftTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  const navBarList = [
    {
      item: "About",
      id: "about-navigate",
    },
    {
      item: "Projects",
      id: "projects-navigate",
    },
    {
      item: "Publications",
      id: "publications-navigate",
    },
  ];

  return (
    <div
      id="navbar"
      className={`navbar-style div-effect ${visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
    >
      <div
        id="navbar-left"
        className={`navbar-left-style transition-transform duration-500 ease-out ${leftVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <p className="animate-font-stretch font-semibold">
          Hey it&apos;s Mark!
        </p>
      </div>
      <div
        id="navbar-right"
        className={`navbar-right-style div-effect ${rightVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        {navBarList.map((item, index) => {
          return (
            <a
              key={index}
              onClick={() => scrollTo(item.id)}
              className="navbar-right-items"
            >
              {item.item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  scrollTo: PropTypes.func,
};

export default NavBar;
