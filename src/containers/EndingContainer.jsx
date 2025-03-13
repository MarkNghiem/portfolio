// A Surprised Section for reaching the end of the page

import { useState, useEffect } from "react";

// Stylesheets
import "../assets/stylesheets/ending.css";

// Assets
import PikaEnding from "/pika-ending-small.jpg?url";
import ChuchuEnding from "/chuchu-ending-small.jpg?url";
import Together from "/together-ending-small.jpg?url";

const EndingContainer = () => {
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 6100);

    return () => clearTimeout(divTimer);
  }, []);

  // List of pictures
  const endingPictures = [PikaEnding, Together, ChuchuEnding];

  return (
    <div
      id="ending"
      className={`mobile-to-tablet-layout ending-div div-effect ${divVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-10 opacity-0"}`}
    >
      <div id="ending-content">
        <h1 className="title mx-3 py-8">You have reached the end!</h1>
        <h2 className="subtitle mx-10 pb-10">
          Here&apos;s more cat pictures for your effort.
        </h2>
        <div className="group ending-group">
          {endingPictures.map((picture, index) => {
            return (
              <img
                key={index}
                src={picture}
                title={`Cat Picture ${index + 1}`}
                aria-label={`Cat Picture ${index + 1}`}
                className="ending-pictures content-border content-shadow"
              />
            );
          })}
        </div>
        <h3 className="subtitle mx-10 pt-10 font-semibold">
          Thank you for checking out my website!
        </h3>
      </div>
    </div>
  );
};

export default EndingContainer;
