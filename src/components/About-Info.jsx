// 'Info' Section - Containing personal portrait and links

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

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

  return (
    <div
      className={`col-span-3 row-span-2 flex flex-col rounded-2xl bg-slate-900/20 text-3xl shadow-2xl shadow-slate-900/50 transition-all duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="info-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="pt-5 text-7xl font-semibold font-stretch-125%">
          Kiet (Mark) Nghiem
        </h1>
        <div className="mt-5 grid h-full w-[90%] grid-cols-5 items-center place-self-center">
          <img
            src={me}
            aria-label="Avatar"
            title="Avatar"
            className="col-span-2 size-84 justify-self-center rounded-full border-2 border-slate-300 object-cover shadow-2xl shadow-slate-900 transition-transform duration-200 hover:scale-105"
          />
          <div className="col-span-3 justify-self-end text-end font-stretch-120%">
            <p>Software Engineer</p>
            <p>Los Angeles, California</p>
            <div className="flex justify-end gap-5 py-8">
              <a
                href={resume}
                download="mark-resume.pdf"
                title="My Resume"
                aria-label="My Resume"
              >
                <button className="cursor-pointer rounded-xl bg-slate-900/20 p-3 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150">
                  <FaFilePdf className="size-10" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/mark-nghiem/"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <button className="cursor-pointer rounded-xl bg-slate-900/20 p-3 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150">
                  <FaLinkedin className="size-10" />
                </button>
              </a>
              <a
                href="https://github.com/MarkNghiem"
                title="GitHub"
                aria-label="GitHub"
              >
                <button className="cursor-pointer rounded-xl bg-slate-900/20 p-3 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150">
                  <FaGithub className="size-10" />
                </button>
              </a>
              <a
                href="https://wellfound.com/u/mark-nghiem"
                title="WellFound"
                aria-label="WellFound"
              >
                <button className="cursor-pointer rounded-xl bg-slate-900/20 p-3 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150">
                  <SiWellfound className="size-10" />
                </button>
              </a>
              <button
                onClick={handleEmail}
                className="cursor-pointer rounded-xl bg-slate-900/20 p-3 transition duration-200 hover:scale-110 hover:brightness-50 active:brightness-150"
                title="Send me an Email"
                aria-label="Send me an Email"
              >
                <BiLogoGmail className="size-10" />
              </button>
            </div>
            <h2 className="text-5xl">Welcome to my Portfolio!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  handleEmail: PropTypes.func
}

export default Info;
