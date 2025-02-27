// 'Info' Section - Containing personal portrait and links

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

  const buttons = [
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-nghiem/",
      icon: <FaLinkedin className="info-icon-size" />,
    },
    {
      type: "GitHub",
      url: "https://github.com/MarkNghiem",
      icon: <FaGithub className="info-icon-size" />,
    },
    {
      type: "WellFound",
      url: "https://wellfound.com/u/mark-nghiem",
      icon: <SiWellfound className="info-icon-size" />,
    },
  ];

  return (
    <div
      id="info"
      className={`col-flex info-desktop-layout div-background div-effect p-5 text-2xl ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="info-content"
        className={`content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="title">Kiet (Mark) Nghiem</h1>
        <div className="col-flex info-content-layout">
          <img
            src={me}
            aria-label="Avatar"
            title="Avatar"
            className="info-image content-border content-shadow content-hover-effect avatar-rounded-full"
          />
          <div className="info-subtitle">
            <p>Software Engineer</p>
            <p>Los Angeles, California</p>
            <div className="info-icon-layout">
              <a
                href={resume}
                download="marknghiem-resume.pdf"
                title="My Resume"
                aria-label="My Resume"
              >
                <button className="info-button button-hover-effect">
                  <FaFilePdf className="info-icon-size" />
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
                    <button className="info-button button-hover-effect">
                      {button.icon}
                    </button>
                  </a>
                );
              })}
              <button
                onClick={handleEmail}
                className="info-button button-hover-effect"
                title="Send me an Email"
                aria-label="Send me an Email"
              >
                <BiLogoGmail className="info-icon-size" />
              </button>
            </div>
            <h2 className="info-ending">Welcome to my Portfolio!</h2>
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
