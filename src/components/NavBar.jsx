const NavBar = () => {
  return (
    <div id="navbar" className='flex justify-around py-2 bg-slate-100/95 border-b border-slate-200 sticky top-0 z-10'>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#publications">Publications</a>
    </div>
  );
};

export default NavBar;