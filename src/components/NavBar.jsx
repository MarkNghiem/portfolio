//The Navigation Bar - Sticky on top of the page

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

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

  return (
    <div
      id="navbar"
      className={`sticky top-0 z-20 flex rounded-b-4xl border-b border-slate-200 bg-slate-100/95 text-xl transition-transform duration-1000 ease-out ${visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
    >
      <div
        id="navbar-left"
        className={`w-1/3 rounded-r-4xl rounded-bl-4xl bg-slate-900/30 p-3.5 transition-transform duration-500 ease-out ${leftVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <p className="animate-font-stretch font-semibold">
          Hey it&apos;s Mark!
        </p>
      </div>
      <div
        id="navbar-right"
        className={`flex w-2/3 items-center justify-around transition-transform duration-1000 ease-out ${rightVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <a
          onClick={() => scrollTo("about-navigate")}
          className="rounded-3xl px-10 py-2 transition-colors duration-200 hover:cursor-pointer hover:bg-slate-300 active:bg-slate-400"
        >
          About
        </a>
        <a
          onClick={() => scrollTo("projects-navigate")}
          className="rounded-3xl px-10 py-2 transition-colors duration-200 hover:cursor-pointer hover:bg-slate-300 active:bg-slate-400"
        >
          Projects
        </a>
        <a
          onClick={() => scrollTo("publications-navigate")}
          className="rounded-3xl px-10 py-2 transition-colors duration-200 hover:cursor-pointer hover:bg-slate-300 active:bg-slate-400"
        >
          Publications
        </a>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  scrollTo: PropTypes.func,
}

export default NavBar;
