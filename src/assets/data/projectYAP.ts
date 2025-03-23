// Data
import { projects } from "./projects";

// Utils
import { populateTech } from "../../utils/populateTech";

const projectYAP = {
  name: "YAP",
  summary:
    "Your Adaptive Personal is a free-to-use communication skills enhancement application. From preparing for a job interview to casually talking with friends, YAP will help you replacing those awkward silence moments with interesting and engaging conversation.",
  features: [
    "Custom trained AI Models with robust, dedicated, categorized prompts and suitable temperature as well as logit bias. Each for distinctive scenarios such as Networking, Dating or Casual.",
    "Real-time engaging conversation with each persona, provide personalized user experiences.",
    "Conversation will end prematurely if you try to be rude or disrespectful.",
    "Score system shows how well you performed the end of each conversation.",
    "Eye-catching with easy to use and navigate User Interface.",
  ],
  technologies: populateTech([
    "javascript",
    "react",
    "node.js",
    "express.js",
    "mongodb",
    "vite",
    "lucide",
    "materialui",
    "tailwind css",
    "postman",
    "openai",
    "html",
    "css",
    "git",
    "excalidraw",
    "trello",
  ]),
  resources: projects[1].resources,
};

export default projectYAP;
