// Publications Section - Containing article and video featuring me and the products of the group

import { useState, useEffect } from "react";

import { publications } from "../assets/data/publications";

const Publications = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5900);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6300);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      id="releases"
      className={`scrollbar div-background div-effect publication-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="publications-content"
        className={`col-flex content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="title pb-8">Publications</h1>
        <div className="publication-inner-layout inner-div">
          {publications.map((publication, index) => {
            return (
              <div
                key={index}
                id="title"
                className="publications-individual content-shadow"
              >
                <h4 className="subtitle mx-3 my-5">{publication.type}</h4>
                <p className="body px-5 text-start">
                  {publication.description}
                </p>
                <div className="publications-collab">
                  <a
                    href={publication.url}
                    title={publication.type}
                    aria-label={publication.type}
                    className="publications-learnmore"
                  >
                    Learn More
                  </a>
                  <div className="publications-ending">
                    <p className="publications-hosts">{publication.host}</p>
                    <p>{publication.collaboratedWith}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
