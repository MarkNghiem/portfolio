/**
 * Footer - Contains:
 * - Another portrait of me
 * - Ways to contact me
 * - Techs that are used to create this website
 * - Changelog: This website will be updated regularly
 */

import { useCallback, useMemo, useState } from "react";

// MUI Components
import { Fade, Popper } from "@mui/material";

// Stylesheets
import "../assets/stylesheets/footer.css";

// Data
import { builtWithIcons } from "../assets/data/builtWith";

// Assets
import MeFooter from "/me-footer.jpg?url";
import { FaExternalLinkAlt } from "react-icons/fa";
import debounce from "lodash.debounce";

// Types
import { FooterProps } from "../types/propTypes";

const Footer = ({ handleEmail, scrollTo }: FooterProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [popperID, setPopperID] = useState<string | number | null>(null);

  // Debounce function, makes popper appear ONLY when hovering over an icons for at least 300ms
  const debouncedSetOpen = useMemo(
    () => debounce((index: number) => setOpen(index), 300),
    [],
  );

  // Memoized callback, handle poppers' appearances when hovering over an icon
  const handlePopperOpen = useCallback(
    (event: React.MouseEvent<HTMLElement | null>, index: number) => {
      setAnchorEl(event.currentTarget);
      setPopperID(index);
      debouncedSetOpen(index);
    },
    [debouncedSetOpen],
  );

  const handlePopperClose = () => {
    setAnchorEl(null);
    setOpen(null);
  };

  return (
    <div id="footer" className="footer">
      <div className="footer-inner">
        <img
          src={MeFooter}
          title="My Portrait 2"
          aria-label="My Portrait 2"
          className="content-border avatar-rounded-full content-shadow content-hover-effect footer-picture"
        />
        <div className="footer-info col-flex">
          <h3 className="title mb-8">Mark Nghiem</h3>
          <ul className="footer-contact subtitle">
            Contact Me via:
            <li className="body font-normal first:mt-2">
              ✉️ Email:{" "}
              <span onClick={handleEmail} className="footer-link">
                mark.kietnghiem@gmail.com
              </span>
            </li>
            <li className="body font-normal">
              📋 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mark-nghiem/"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="footer-link"
              >
                Visit me <span className="font-semibold">here</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <h5 className="subtitle mt-5">Built With</h5>
        <div className="footer-right-icon-container">
          {builtWithIcons.map((icon, index) => {
            return (
              <div key={index}>
                <img
                  src={icon.icon}
                  className="footer-icon"
                  title={icon.name}
                  aria-label={icon.name}
                  aria-owns={popperID ? String(popperID) : undefined}
                  id={index ? String(index) : undefined}
                  onMouseEnter={(event) => handlePopperOpen(event, index)}
                  onMouseLeave={handlePopperClose}
                />
                {anchorEl && (
                  <Popper
                    open={open === index}
                    anchorEl={anchorEl}
                    id={popperID ? String(popperID) : undefined}
                    placement="top-end"
                    transition
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={100}>
                        <div className="typography-global popper-desktop footer-popper">
                          {icon.name}
                        </div>
                      </Fade>
                    )}
                  </Popper>
                )}
              </div>
            );
          })}
        </div>
        <div className="body flex justify-center">
          <a
            href="https://github.com/MarkNghiem/portfolio/blob/main/CHANGELOG.md"
            title="Changelog"
            aria-label="Changelog"
            className="footer-link flex gap-1"
          >
            Changelog
            <FaExternalLinkAlt className="size-3" />
          </a>
          <p className="mx-5">|</p>
          <a
            href="https://github.com/MarkNghiem/portfolio/issues/new"
            title="Report Issue"
            aria-label="Report Issue"
            className="footer-link flex gap-1"
          >
            Report Issue
            <FaExternalLinkAlt className="size-3" />
          </a>
        </div>
      </div>
      <div
        onClick={() => scrollTo("about-navigate")}
        className="footer-back-to-top"
      >
        <p className="animate-bounce text-lg">↑</p>
        <p>Back to top</p>
      </div>
    </div>
  );
};

export default Footer;
