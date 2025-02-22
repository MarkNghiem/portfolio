// 'Info' Section - Containing personal portrait and links

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import {
  info3xl1,
  info3xl2,
  info3xl3,
  info3xl4,
  info3xl5,
  info3xl6,
  info3xl7,
  info3xl8,
  title3xl,
} from "../assets/styles";

import me from "../../public/me.jpeg";
import resume from "../../public/my-resume.pdf";

const Info = ({ handleEmail }) => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5500);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 5900);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const buttons = [
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-nghiem/",
      icon: <FaLinkedin className={`${info3xl7} lg:size-10`} />,
    },
    {
      type: "GitHub",
      url: "https://github.com/MarkNghiem",
      icon: <FaGithub className={`${info3xl7} lg:size-10`} />,
    },
    {
      type: "WellFound",
      url: "https://wellfound.com/u/mark-nghiem",
      icon: <SiWellfound className={`${info3xl7} lg:size-10`} />,
    },
  ];

  return (
    <div
      id="info-component"
      className={`col-flex rounded-2xl bg-slate-900/20 text-2xl shadow-2xl shadow-slate-900/50 transition-all duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${info3xl1}`}
    >
      <div
        id="info-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`pt-5 text-5xl/15 font-semibold font-stretch-115% ${title3xl} title`}
        >
          Kiet (Mark) Nghiem
        </h1>
        <div
          className={`my-10 items-center place-self-center max-xl:flex max-xl:flex-col ${info3xl2} lg:grid lg:grid-cols-5 lg:px-10`}
        >
          <img
            src={me}
            aria-label="Avatar"
            title="Avatar"
            className={`size-72 justify-self-center rounded-full border-2 border-slate-300 object-cover shadow-2xl shadow-slate-900 transition-transform duration-200 hover:scale-105 lg:col-span-2 ${info3xl3}`}
          />
          <div className={`mt-10 font-stretch-115% ${info3xl4} lg:col-span-3 lg:justify-self-end lg:text-end lg:mt-0`}>
            <p>Software Engineer</p>
            <p>Los Angeles, California</p>
            <div className={`flex justify-center gap-5 py-5 ${info3xl5} lg:justify-end lg:py-8`}>
              <a
                href={resume}
                download="mark-resume.pdf"
                title="My Resume"
                aria-label="My Resume"
              >
                <button
                  className={`cursor-pointer rounded-xl bg-slate-900/20 p-2 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150 ${info3xl6} lg:p-3`}
                >
                  <FaFilePdf className={`${info3xl7} lg:size-10`} />
                </button>
              </a>
              {buttons.map((button, index) => {
                return (
                  <a
                    key={index}
                    href={button.url}
                    title={button.type}
                    aria-label={button.type}
                  >
                    <button
                      className={`cursor-pointer rounded-xl bg-slate-900/20 p-2 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150 ${info3xl6} lg:p-3`}
                    >
                      {button.icon}
                    </button>
                  </a>
                );
              })}
              <button
                onClick={handleEmail}
                className={`cursor-pointer rounded-xl bg-slate-900/20 p-2 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150 ${info3xl6} lg:p-3`}
                title="Send me an Email"
                aria-label="Send me an Email"
              >
                <BiLogoGmail className={`${info3xl7} lg:size-10`} />
              </button>
            </div>
            <h2 className={`text-4xl ${info3xl8}`}>Welcome to my Portfolio!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  handleEmail: PropTypes.func,
};

export default Info;
