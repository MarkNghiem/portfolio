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
    <div id="info" className="col-span-3 row-span-2 rounded-2xl bg-slate-900/30 text-3xl flex flex-col">
      <h1 className="pt-5 text-7xl font-semibold font-stretch-125%">
        Kiet (Mark) Nghiem
      </h1>
      <div className="grid w-[90%] grid-cols-5 place-self-center h-full items-center py-10">
        <img
          src={me}
          aria-label="Avatar"
          title="Avatar"
          className="size-88 justify-self-center rounded-full object-cover col-span-2"
        />
        <div className="col-span-3 justify-self-end text-end font-stretch-120%">
          <p>Software Engineer</p>
          <p>Los Angeles, California</p>
          <div className="flex justify-end gap-5 py-8">
            <button className="rounded-xl bg-slate-900/20 p-3">
              <a href={resume} download="mark-resume.pdf">
                <FaFilePdf className="size-10" />
              </a>
            </button>
            <button className="rounded-xl bg-slate-900/20 p-3">
              <a
                href="https://www.linkedin.com/in/mark-nghiem/"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="size-10" />
              </a>
            </button>
            <button className="rounded-xl bg-slate-900/20 p-3">
              <a
                href="https://github.com/MarkNghiem"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub className="size-10" />
              </a>
            </button>
            <button className="rounded-xl bg-slate-900/20 p-3">
              <a
                href="https://wellfound.com/u/mark-nghiem"
                title="WellFound"
                aria-label="WellFound"
              >
                <SiWellfound className="size-10" />
              </a>
            </button>
            <button
              onClick={handleEmail}
              className="rounded-xl bg-slate-900/20 p-3"
            >
              <BiLogoGmail className="size-10" />
            </button>
          </div>
          <h2 className="text-5xl">Welcome to my Portfolio!</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
