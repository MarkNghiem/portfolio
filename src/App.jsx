// App Container

import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import AboutContainer from "./containers/AboutContainer";

const App = () => {
  const [introVisible, setIntroVisible] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIntroVisible(true);
    }, 500);

    const fadeOutTimer = setTimeout(() => {
      setIntroVisible(false);
    }, 3000);

    const mainFadeInTimer = setTimeout(() => {
      setMainVisible(true);
    }, 5500);
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(mainFadeInTimer);
    };
  }, []);

  return (
    <div
      id="app"
      className="bg-gradient-to-br from-amber-300/30 from-10% via-slate-300/20 via-60% to-red-300/20 to-90% text-center text-slate-700 font-stretch-110%"
    >
      <h1
        className={`absolute top-[50%] left-[50%] -translate-[50%] text-9xl opacity-0 transition-opacity duration-1000 ease-in-out ${introVisible ? "opacity-100" : ""}`}
      >
        Hey it&apos;s Mark! 🎉
      </h1>
      <div
        id="main-container"
        className={`opacity-0 transition-opacity duration-1000 ${mainVisible ? "opacity-100" : ""}`}
      >
        <NavBar />
        <AboutContainer />
      </div>
    </div>
  );
};

export default App;
