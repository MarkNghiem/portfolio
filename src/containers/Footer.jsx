/**
 * Footer - Contains:
 * - Another portrait of me
 * - Ways to contact me
 * - Techs that are used to create this website
 * - Changelog: This website will be updated regularly
 */

import PropTypes from "prop-types";

import "../assets/stylesheets/footer.css";

import MeFooter from "../../public/me-footer.jpg";
import JavaScriptIcon from "../../public/svg/javascript.svg";
import HTMLIcon from "../../public/svg/html5.svg";
import CSSIcon from "../../public/svg/css.svg";
import ReactIcon from "../../public/svg/react.svg";
import ViteIcon from "../../public/svg/vite.svg";
import TailwindCSSIcon from "../../public/svg/tailwindcss.svg";
import MUIIcon from '../../public/svg/mui.svg';
import VercelIcon from "../../public/svg/vercel.svg";

const Footer = ({ handleEmail, scrollTo }) => {
  const builtWithIcons = [
    JavaScriptIcon,
    HTMLIcon,
    CSSIcon,
    ReactIcon,
    ViteIcon,
    TailwindCSSIcon,
    MUIIcon,
    VercelIcon,
  ];

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
              Email:{" "}
              <span onClick={handleEmail} className="footer-link">
                mark.kietnghiem@gmail.com
              </span>
            </li>
            <li className="body font-normal">
              LinkedIn:{" "}
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
            return <img src={icon} key={index} className="footer-icon" />;
          })}
        </div>
        <div className="body flex justify-center">
          <a
            href="https://github.com/MarkNghiem/portfolio/blob/main/CHANGELOG.md"
            title="Changelog"
            aria-label="Changelog"
            className="footer-link"
          >
            Changelog
          </a>
          <p className="mx-5">|</p>
          <a
            href="https://github.com/MarkNghiem/portfolio/issues/new"
            title="Report Issue"
            aria-label="Report Issue"
            className="footer-link"
          >
            Report Issue
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

Footer.propTypes = {
  handleEmail: PropTypes.func,
  scrollTo: PropTypes.func,
};

export default Footer;
