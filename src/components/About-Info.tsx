// 'Info' Section - Containing personal portrait and links

import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

// MUI Components
import { Fade, Popper } from "@mui/material";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// React Icons
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

// Assets
import me from "/me.jpeg?url";
import resume from "/mark-resume.pdf?url";

// Types
import { AboutProps } from "../types/propTypes";

const Info = ({ handleEmail }: AboutProps) => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [open, setOpen] = useState<string | number | null>(null);
  const [popperID, setPopperID] = useState<string | number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Debounce to make the popper trigger when hovering the button for 300ms
  const debouncedSetOpen = useMemo(
    () => debounce((index) => setOpen(index), 300),
    [],
  );

  /**
   * Memoized callback to handle Popper open and close states when hovering over a button
   * anchorEl is set to current hovering target
   * If index is provide or index is 0 (Explicitly since 0 is falsy), trigger the opening of popper and set the current opening popper ID
   * Otherwise, trigger the opening of popper using the provided element as well as its ID
   */
  const handlePopperOpen = useCallback(
    (
      event: React.MouseEvent<HTMLElement | null>,
      element: string | null,
      index?: number | undefined,
    ) => {
      setAnchorEl(event.currentTarget);
      if (index || index === 0) {
        debouncedSetOpen(index);
        setPopperID(index);
      } else {
        debouncedSetOpen(element);
        setPopperID(element);
      }
    },
    [debouncedSetOpen],
  );

  /**
   * When not hovering anymore:
   * - Cancel debounce
   * - Deactivate the opening of popper and disable anchorEl
   */
  const handlePopperClose = () => {
    debouncedSetOpen.cancel();
    setOpen(null);
    setAnchorEl(null);
  };

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 5500, 5900);

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
        className={`content-effect ${contentVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
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
                  aria-owns={popperID ? String(popperID) : undefined}
                  className="info-button button-hover-effect"
                  onMouseEnter={(event) =>
                    handlePopperOpen(event, "download-resume")
                  }
                  onMouseLeave={handlePopperClose}
                >
                  <FaFilePdf className="info-icon-size" />
                  <FaFileDownload className="icons" />
                </button>
                {anchorEl && (
                  <Popper
                    open={open === "download-resume"}
                    id={popperID ? String(popperID) : undefined}
                    anchorEl={anchorEl}
                    placement="top-start"
                    transition
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={200}>
                        <div className="popper-desktop typography-global">
                          <p>My Resume</p>
                          <FaFileDownload className="icons" />
                        </div>
                      </Fade>
                    )}
                  </Popper>
                )}
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
                      aria-owns={popperID ? String(popperID) : undefined}
                      onMouseEnter={(event) =>
                        handlePopperOpen(event, null, index)
                      }
                      onMouseLeave={handlePopperClose}
                    >
                      {button.icon}
                      <FaExternalLinkAlt className="icons" />
                    </button>
                    {anchorEl && (
                      <Popper
                        id={popperID ? String(popperID) : undefined}
                        open={open === index}
                        anchorEl={anchorEl}
                        placement="top-start"
                        transition
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={200}>
                            <div className="popper-desktop typography-global">
                              <p>{`Visit My ${button.type}`}</p>
                              <FaExternalLinkAlt className="icons" />
                            </div>
                          </Fade>
                        )}
                      </Popper>
                    )}
                  </a>
                );
              })}
              <button
                onClick={handleEmail}
                className="info-button button-hover-effect"
                title="Send me an Email"
                aria-label="Send me an Email"
                aria-owns={popperID ? String(popperID) : undefined}
                id="send-email-button"
                onMouseEnter={(event) =>
                  handlePopperOpen(event, "send-email-button")
                }
                onMouseLeave={handlePopperClose}
              >
                <BiLogoGmail className="info-icon-size" />
                <IoIosSend className="icons" />
              </button>
              {anchorEl && (
                <Popper
                  id={popperID ? String(popperID) : undefined}
                  open={open === "send-email-button"}
                  anchorEl={anchorEl}
                  placement="top-start"
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={200}>
                      <div className="popper-desktop typography-global">
                        <p>Send me an Email</p>
                        <IoIosSend className="icons" />
                      </div>
                    </Fade>
                  )}
                </Popper>
              )}
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
