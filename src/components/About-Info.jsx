import { FaFilePdf } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

import me from "../../public/me.jpeg";
import resume from "../../public/my-resume.pdf";

const Info = () => {
  const handleEmail = () => {
    const myEmail = "mark.kietnghiem@gmail.com";
    const mailTo = `mailto:${myEmail}`;
    window.location.href = mailTo;
  };

  return (
    <div id="info">
      <h1>Kiet (Mark) Nghiem</h1>
      <div className="flex">
        <img
          src={me}
          aria-label="Avatar"
          title="Avatar"
          className="size-60 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p>Software Engineer</p>
          <p>Los Angeles, California</p>
          <div>
            <button>
              <a href={resume} download="mark-resume.pdf">
                <FaFilePdf />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/mark-nghiem/"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </button>
            <button>
              <a
                href="https://github.com/MarkNghiem"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </button>
            <button>
              <a
                href="https://wellfound.com/u/mark-nghiem"
                title="WellFound"
                aria-label="WellFound"
              >
                <SiWellfound />
              </a>
            </button>
            <button onClick={handleEmail}>
              <BiLogoGmail />
            </button>
          </div>
          <h2>Welcome to my Portfolio!</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
