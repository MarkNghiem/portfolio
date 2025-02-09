const NavBar = () => {
  return (
    <div
      id="navbar"
      className="sticky top-0 z-10 flex rounded-b-4xl border-b border-slate-200 bg-slate-100/95 text-xl"
    >
      <div
        id="navbar-left"
        className="w-1/3 rounded-r-4xl rounded-bl-4xl bg-slate-900/30 p-3.5"
      >
        <p className="font-semibold">Hey it&apos;s Mark!</p>
      </div>
      <div id="navbar-right" className="flex w-2/3 items-center justify-around">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
      </div>
    </div>
  );
};

export default NavBar;
