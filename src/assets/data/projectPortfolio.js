// Data
import { projects } from "./projects";

// Utils
import { populateTech } from "../../utils/populateTech";

const projectPortfolio = {
  name: "Portfolio",
  summary:
    "The most robust Front-End Application that I have built. Get to know me better by visiting this website",
  features: [
    "Beautiful and Responsive User Interface for both Mobile and Desktop.",
    "Switch between Light and Dark Mode for better visualization experience.",
    "Introduction Section featuring me and my adorable cats.",
    "Tech Stack Panel showcasing my expertise and technologies that I have experience in.",
    "Projects Section introducing my own projects as well as the ones I collaborated on.",
    "A list of my Published Works or those that I was Featured and Mentioned.",
    "Recommendations from my collaborators and colleagues.",
    "And more...",
  ],
  technologies: populateTech([
    "javascript",
    "typescript",
    "react",
    "vite",
    "lucide",
    "materialui",
    "tailwind css",
    "vercel",
    "html",
    "css",
    "git",
    "github actions",
    "excalidraw",
  ]),
  resources: projects[5].resources,
};

export default projectPortfolio;
