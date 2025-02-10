// App Container

import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Navigator from './components/Navigator';
import AboutContainer from "./containers/AboutContainer";
import ProjectsContainer from "./containers/ProjectsContainer";

const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setVisible(true);
    }, 500);

    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      id="app"
      className="bg-gradient-to-br from-amber-300/30 from-10% via-slate-300/20 via-60% to-red-300/20 to-90% text-center text-slate-700 font-stretch-110%"
    >
      <h1
        className={`absolute top-[50%] left-[50%] -translate-[50%] text-9xl opacity-0 transition-opacity duration-1000 ease-in-out ${visible ? "opacity-100" : ""}`}
      >
        Hey it&apos;s Mark! 🎉
      </h1>
      <div id="main-container">
        <NavBar />
        <Navigator />
        <AboutContainer />
        <ProjectsContainer />
      </div>
    </div>
  );
};

export default App;
