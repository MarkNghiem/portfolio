import { useEffect, useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

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
        <p className="font-semibold">Hey it&apos;s Mark!</p>
      </div>
      <div
        id="navbar-right"
        className={`flex w-2/3 items-center justify-around transition-transform duration-1000 ease-out ${rightVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <a href="#about-shortcut">About</a>
        <a href="#projects-shortcut">Projects</a>
        <a href="#publications">Publications</a>
      </div>
    </div>
  );
};

export default NavBar;
