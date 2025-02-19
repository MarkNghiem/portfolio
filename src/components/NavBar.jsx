//The Navigation Bar - Sticky on top of the page

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { navBar3xl, navBarLeft3xl, flex3xl } from "../assets/styles";

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
      className={`sticky top-0 z-20 rounded-b-4xl border-b border-slate-200 bg-slate-100/95 transition-transform duration-1000 ease-out ${visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} ${navBar3xl}`}
    >
      <div
        id="navbar-left"
        className={`sticky top-0 w-full rounded-b-4xl bg-slate-900/30 p-2 transition-transform duration-500 ease-out ${leftVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} ${navBarLeft3xl}`}
      >
        <p className="animate-font-stretch font-semibold">
          Hey it&apos;s Mark!
        </p>
      </div>
      <div
        id="navbar-right"
        className={`hidden w-2/3 items-center justify-around transition-transform duration-1000 ease-out ${rightVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} ${flex3xl}`}
      >
        {navBarList.map((item, index) => {
          return (
            <a
              key={index}
              onClick={() => scrollTo(item.id)}
              className="rounded-3xl px-10 py-2 transition-colors duration-200 hover:cursor-pointer hover:bg-slate-300 active:bg-slate-400"
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
