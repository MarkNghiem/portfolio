// App Container

import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Navigator from "./components/Navigator";
import AboutContainer from "./containers/AboutContainer";
import ProjectsContainer from "./containers/ProjectsContainer";
import PublicationsContainer from "./containers/PublicationContainer";
import EndingContainer from "./containers/EndingContainer";
import Footer from "./containers/Footer";

import { app3xl, ender3xl } from "./assets/styles";

const App = () => {
  const [visible, setVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
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

  // Redirect to mailing to the provided email address
  const handleEmail = () => {
    const myEmail = "mark.kietnghiem@gmail.com";
    const mailTo = `mailto:${myEmail}`;
    window.location.href = mailTo;
  };

  // Smooth scrolling behaviour when clicking on a button in the NavBar
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="app"
      className="m-0 box-border bg-gradient-to-br from-amber-300/30 from-10% via-slate-300/20 via-60% to-red-300/20 to-90% p-0 text-center text-slate-700 font-stretch-110%"
    >
      <h1
        className={`fixed top-1/2 left-1/2 w-full -translate-1/2 text-3xl font-semibold opacity-0 transition-opacity duration-1000 ease-in-out ${visible ? "opacity-100" : ""} ${app3xl}`}
      >
        Hey it&apos;s Mark! 🎉
      </h1>
      <div id="main-container" className="max-xl:flex max max-xl:flex-col">
        <NavBar scrollTo={scrollTo} />
        <Navigator />
        <div id="about-navigate" className="h-1" />
        <AboutContainer handleEmail={handleEmail} />
        <div id="projects-navigate" className="h-1" />
        <ProjectsContainer />
        <div id="publications-navigate" className="h-1" />
        <PublicationsContainer />
        <div
          className={`animate-font-stretch flex h-[90dvh] flex-col items-center justify-end text-3xl font-semibold ${ender3xl}`}
        >
          <h3 className="mb-5">Is it over? Or is it not?</h3>
          <p className="animate-bounce">↓</p>
        </div>
        <div id="ending-navigate" className="h-1" />
        <EndingContainer />
        <Footer handleEmail={handleEmail} scrollTo={scrollTo} />
      </div>
    </div>
  );
};

export default App;
