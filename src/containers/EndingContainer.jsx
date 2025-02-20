// A Surprised Section for reaching the end of the page

import { useState, useEffect } from "react";

import { ending3xl1, ending3xl2, ending3xl3, ending3xl4, title3xl, subtitle3xl, ender3xl } from "../assets/styles";

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
      className={`mt-[90dvh] mb-20 w-9/10 place-self-center rounded-2xl bg-linear-to-br from-slate-900/20 to-amber-900/30 pb-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${ending3xl1}`}
    >
      <div id="ending-content">
        <h1
          className={`mx-2 py-8 text-3xl font-semibold font-stretch-115% ${title3xl} ${ending3xl2}`}
        >
          You have reached the end!
        </h1>
        <h2
          className={`mx-2 pb-10 text-xl font-semibold font-stretch-115% ${ender3xl} ${ending3xl2}`}
        >
          Here&apos;s more cat pictures for your effort.
        </h2>
        <div className={`group flex flex-col justify-center gap-10 place-self-center ${ending3xl3}`}>
          {endingPictures.map((picture, index) => {
            return (
              <img
                key={index}
                src={picture}
                title={`Cat Picture ${index + 1}`}
                aria-label={`Cat Picture ${index + 1}`}
                className={`size-60 rounded-4xl border-2 border-slate-400 object-cover shadow-xl shadow-slate-900/40 transition-transform duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-105 hover:opacity-100 ${ending3xl4}`}
              />
            );
          })}
        </div>
        <h3 className={`mx-2 pt-10 font-semibold ${subtitle3xl} ${ending3xl2}`}>
          Thank you for checking out my website!
        </h3>
      </div>
    </div>
  );
};

export default EndingContainer;
