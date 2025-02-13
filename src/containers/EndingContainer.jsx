// A Surprised Section for reaching the end of the page

import { useState, useEffect } from "react";

import PikaEnding from "../../public/pika-ending-small.jpg";
import ChuchuEnding from "../../public/chuchu-ending-small.jpg";
import Together from "../../public/together-ending-small.jpg";

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
      className={`mt-[100vh] mb-20 w-4/5 place-self-center rounded-2xl bg-linear-to-br from-slate-900/20 to-amber-900/30 py-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div id="ending-content">
        <h1 className="pb-5 text-5xl font-semibold font-stretch-120%">
          You have reached the end!
        </h1>
        <h1 className="pb-10 text-4xl font-semibold font-stretch-120%">
          Here&apos;s more cat pictures for your effort.
        </h1>
        <div className="group flex justify-center gap-10 place-self-center">
          {endingPictures.map((picture, index) => {
            return (
              <img
                key={index}
                src={picture}
                title={`Cat Picture ${index + 1}`}
                aria-label={`Cat Picture ${index + 1}`}
                className="size-80 rounded-4xl border-2 border-slate-400 object-cover shadow-xl shadow-slate-900/40 transition-transform duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-105 hover:opacity-100"
              />
            );
          })}
        </div>
        <h3 className="pt-10 text-3xl font-semibold font-stretch-115%">
          Thank you for checking out my website!
        </h3>
      </div>
    </div>
  );
};

export default EndingContainer;
