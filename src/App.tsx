// App Container

import { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Navigator from "./components/Navigator";
import AboutContainer from "./containers/AboutContainer";
import ProjectsContainer from "./containers/ProjectsContainer";
import PublicationsContainer from "./containers/PublicationContainer";
import EndingContainer from "./containers/EndingContainer";
import Footer from "./containers/Footer";

// Types
import { NavBarProps } from "./types/propTypes";

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
  const scrollTo: NavBarProps["scrollTo"] = (id) => {
    const item = document.getElementById(id);

    if (item) {
      item.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(
        "❌ Unable to get Item. App.tsx - App Component - scrollTo func",
      );
    }
  };

  return (
    <div id="app" className="gradient-background global typography-global">
      <h1
        className={`absolute-centered opening-text content-effect pointer-events-none fixed w-full ${visible ? "opacity-100" : "opacity-0"}`}
      >
        Hey it&apos;s Mark! 🎉
      </h1>
      <div id="main-container" className="col-flex">
        <NavBar scrollTo={scrollTo} />
        <Navigator />
        <div id="about-navigate" className="h-1" />
        <AboutContainer handleEmail={handleEmail} />
        <div id="projects-navigate" className="h-1" />
        <ProjectsContainer />
        <div id="publications-navigate" className="h-1" />
        <PublicationsContainer />
        <div className="animate-font-stretch col-flex opening-text h-[100vh] items-center justify-end">
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
