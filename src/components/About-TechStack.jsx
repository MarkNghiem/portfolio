// 'Tech Stack' Section - Contain the stack that I have experience in

import { useCallback, useMemo, useState } from "react";
import debounce from "lodash.debounce";

// MUI Components
import { Fade, Popper } from "@mui/material";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Data
import { langs, techs, others } from "../assets/data/techStack";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const TechStack = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(null);
  const [popperID, setPopperID] = useState(null);
  
  // Debounce the handler to only run when hovered for at least 300ms
  const setDebouncedOpen = useMemo(
    () => debounce((index) => setOpen(index), 300),
    [],
  );

  /**
   * A memoized callback for handling popper appearance when hovering over a button
   * When hovered:
   * - Set anchorEl to the current hovered object
   * - Set open and popperID to the index of current hovered object
   */
  const handlePopperOpen = useCallback((event, index) => {
    setAnchorEl(event.currentTarget);
    setPopperID(index);
    setDebouncedOpen(index);
  }, [setDebouncedOpen]);

  // When not hovering anymore, cancel debounce, set anchorEl, open and popperID to their initial states
  const handlePopperClose = () => {
    setDebouncedOpen.cancel();
    setAnchorEl(null);
    setOpen(null);
    setAnchorEl(null);
  };

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 5700, 6100);

  return (
    <div
      id="tech-stack"
      className={`scrollbar div-background div-effect tech-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="tech-stack-content"
        className={`content-effect ${contentVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <h1 className="title pb-8">Tech Stacks</h1>
        <div className="inner-div tech-height">
          <h3 className="subtitle mb-5">Programming Languages</h3>
          <div id="lang-button" className="tech-button-group group">
            {langs.map((lang, index) => {
              return (
                <a
                  href={lang.url}
                  key={index}
                  title={lang.label}
                  aria-label={lang.label}
                >
                  <button
                    className="tech-button"
                    aria-owns={popperID}
                    onMouseEnter={(event) =>
                      handlePopperOpen(event, `lang.${index}`)
                    }
                    onMouseLeave={handlePopperClose}
                  >
                    <img src={lang.icon} className="tech-button-image" />
                    <p className="tech-button-description">{lang.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                  {anchorEl && (
                    <Popper
                      id={popperID}
                      open={open === `lang.${index}`}
                      anchorEl={anchorEl}
                      placement="top-start"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                          <div className="typography-global popper-desktop">
                            {lang.label}
                          </div>
                        </Fade>
                      )}
                    </Popper>
                  )}
                </a>
              );
            })}
          </div>
          <h3 className="subtitle mt-8 mb-5">Frameworks and Technologies</h3>
          <div id="tech-button" className="group tech-button-group">
            {techs.map((tech, index) => {
              return (
                <a
                  href={tech.url}
                  key={index}
                  title={tech.label}
                  aria-label={tech.label}
                >
                  <button
                    className="tech-button"
                    aria-owns={popperID}
                    onMouseEnter={(event) =>
                      handlePopperOpen(event, `tech.${index}`)
                    }
                    onMouseLeave={handlePopperClose}
                  >
                    <img src={tech.icon} className="tech-button-image" />
                    <p className="tech-button-description">{tech.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                  {anchorEl && (
                    <Popper
                      id={popperID}
                      open={open === `tech.${index}`}
                      anchorEl={anchorEl}
                      placement="top-start"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                          <div className="typography-global popper-desktop">
                            {tech.label}
                          </div>
                        </Fade>
                      )}
                    </Popper>
                  )}
                </a>
              );
            })}
          </div>
          <h3 className="subtitle mt-8 mb-4">Others</h3>
          <div id="other-button" className="group tech-button-group">
            {others.map((other, index) => {
              return (
                <a
                  href={other.url}
                  key={index}
                  title={other.label}
                  aria-label={other.label}
                >
                  <button
                    className="tech-button"
                    aria-owns={popperID}
                    onMouseEnter={(event) =>
                      handlePopperOpen(event, `other.${index}`)
                    }
                    onMouseLeave={handlePopperClose}
                  >
                    <img src={other.icon} className="tech-button-image" />
                    <p className="tech-button-description">{other.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                  {anchorEl && (
                    <Popper
                      id={popperID}
                      open={open === `other.${index}`}
                      anchorEl={anchorEl}
                      placement="top-start"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                          <div className="typography-global popper-desktop">
                            {other.label}
                          </div>
                        </Fade>
                      )}
                    </Popper>
                  )}
                </a>
              );
            })}
          </div>
          <h2 className="subtitle mt-8">And more to come...</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
