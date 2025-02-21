/**
 * Footer - Contains:
 * - Another portrait of me
 * - Ways to contact me
 * - Techs that are used to create this website
 * - Changelog: This website will be updated regularly
 */

import PropTypes from "prop-types";

import {
  footer3xl1,
  footer3xl2,
  footer3xl3,
  footer3xl4,
  footer3xl5,
  footer3xl6,
  footer3xl7,
  title3xl,
  subtitle3xl,
  displayBlock3xl,
} from "../assets/styles";

import MeFooter from "../../public/me-footer.jpg";
import JavaScriptIcon from "../../public/svg/javascript.svg";
import HTMLIcon from "../../public/svg/html5.svg";
import CSSIcon from "../../public/svg/css.svg";
import ReactIcon from "../../public/svg/react.svg";
import ViteIcon from "../../public/svg/vite.svg";
import TailwindCSSIcon from "../../public/svg/tailwindcss.svg";
import VercelIcon from "../../public/svg/vercel.svg";

const Footer = ({ handleEmail, scrollTo }) => {
  const builtWithIcons = [
    JavaScriptIcon,
    HTMLIcon,
    CSSIcon,
    ReactIcon,
    ViteIcon,
    TailwindCSSIcon,
    VercelIcon,
  ];

  return (
    <div
      id="footer"
      className={`relative flex flex-col items-center rounded-t-full bg-linear-to-br from-amber-400/80 to-red-400/80 ${footer3xl1}`}
    >
      <div className={`max-md:flex max-md:flex-col ${footer3xl2}`}>
        <img
          src={MeFooter}
          title="My Portrait 2"
          aria-label="My Portrait 2"
          className={`my-8 size-72 rounded-full border-2 border-slate-400 object-cover shadow-xl shadow-slate-900/40 transition-transform duration-200 hover:scale-105 max-sm:place-self-center ${footer3xl3}`}
        />
        <div className={`mb-8 ${footer3xl4}`}>
          <h3
            className={`mb-5 text-5xl font-semibold font-stretch-115% ${title3xl} ${footer3xl5}`}
          >
            Mark Nghiem
          </h3>
          <ul className={`ml-6 list-disc text-start text-lg ${subtitle3xl}`}>
            Contact Me via:
            <li className="first:mt-2">
              Email:{" "}
              <span
                onClick={handleEmail}
                className="transition-colors duration-300 hover:cursor-pointer hover:text-amber-800"
              >
                mark.kietnghiem@gmail.com
              </span>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mark-nghiem/"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="transition-colors duration-300 hover:text-amber-800"
              >
                Visit me <span className="font-semibold">here</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`relative col-span-1 place-self-end rounded-t-full bg-linear-to-br from-slate-100 to-slate-400 ${footer3xl6}`}
      >
        <h5 className="my-8 text-2xl font-semibold font-stretch-120%">
          Built With
        </h5>
        <div
          className={`mx-10 mb-15 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 ${footer3xl7}`}
        >
          {builtWithIcons.map((icon, index) => {
            return (
              <img
                src={icon}
                key={index}
                className="size-12 rounded-xl bg-slate-400 p-2 transition-transform duration-200 hover:scale-110"
              />
            );
          })}
        </div>
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xl">
          Changelog
        </p>
      </div>
      <div
        onClick={() => scrollTo("about-navigate")}
        className={`absolute bottom-0 left-1/2 hidden -translate-x-1/2 rounded-t-full bg-slate-900/10 px-3 pt-3 pb-1 transition-colors duration-200 hover:cursor-pointer hover:bg-slate-900/20 active:bg-slate-900/30 ${displayBlock3xl}`}
      >
        <p className="animate-bounce text-xl">↑</p>
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
