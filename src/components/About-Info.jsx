// 'Info' Section - Containing personal portrait and links

import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { FaFilePdf } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaFileDownload,
} from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

import me from "../../public/me.jpeg";
import resume from "../../public/my-resume.pdf";
import debounce from "lodash.debounce";
import { Fade, Popper } from "@mui/material";

const Info = ({ handleEmail }) => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [open, setOpen] = useState(null);
  const [popperID, setPopperID] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopperOpen = useCallback((event, element, index) => {
    setAnchorEl(event.currentTarget);
    if (index || index === 0) {
      setOpen(index);
      setPopperID(index);
    } else {
      setOpen(element);
      setPopperID(element);
    }
  }, []);

  const debouncedOpen = useMemo(
    () => debounce(handlePopperOpen, 500),
    [handlePopperOpen],
  );

  const handlePopperClose = () => {
    debouncedOpen.cancel();
    setAnchorEl(null);
    setOpen(null);
  };

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
                <button
                  id="download-resume"
                  aria-owns={popperID}
                  className="info-button button-hover-effect"
                  onMouseEnter={(event) =>
                    handlePopperOpen(event, "download-resume")
                  }
                  onMouseLeave={handlePopperClose}
                >
                  <FaFilePdf className="info-icon-size" />
                  <FaFileDownload className="icons" />
                </button>
                <Popper
                  open={open === "download-resume"}
                  id={popperID}
                  anchorEl={anchorEl}
                  placement="top-start"
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={100}>
                      <div className="popper-desktop typography-global">
                        <p>My Resume</p>
                        <FaFileDownload className="icons" />
                      </div>
                    </Fade>
                  )}
                </Popper>
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
                      className="info-button button-hover-effect"
                      aria-owns={popperID}
                      onMouseEnter={(event) =>
                        handlePopperOpen(event, null, index)
                      }
                      onMouseLeave={handlePopperClose}
                    >
                      {button.icon}
                      <FaExternalLinkAlt className="icons" />
                    </button>
                    <Popper
                      id={popperID}
                      open={open === index}
                      anchorEl={anchorEl}
                      placement="top-start"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={100}>
                          <div className="popper-desktop typography-global">
                            <p>{`Visit My ${button.type}`}</p>
                            <FaExternalLinkAlt className="icons" />
                          </div>
                        </Fade>
                      )}
                    </Popper>
                  </a>
                );
              })}
              <button
                onClick={handleEmail}
                className="info-button button-hover-effect"
                title="Send me an Email"
                aria-label="Send me an Email"
                aria-owns={popperID}
                id="send-email-button"
                onMouseEnter={(event) =>
                  handlePopperOpen(event, "send-email-button")
                }
                onMouseLeave={handlePopperClose}
              >
                <BiLogoGmail className="info-icon-size" />
                <IoIosSend className="icons" />
              </button>
              <Popper
                id={popperID}
                open={open === "send-email-button"}
                anchorEl={anchorEl}
                placement="top-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={100}>
                    <div className="popper-desktop typography-global">
                      <p>Send me an Email</p>
                      <IoIosSend className="icons" />
                    </div>
                  </Fade>
                )}
              </Popper>
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
