// Data
import { projects } from "./projects";

// Utils
import { populateTech } from "../../utils/populateTech";

const projectClockin = {
  name: "Clockin'",
  summary:
    "A must-have application for managers. Keeping track of your employees' time and information simplified",
  features: [
    "Secured session with cookies and password hashing.",
    "Comprehensive dashboard display basic information of the company, the manager and their employees.",
    "Add, Edit or Delete employee's information by making queries to the database.",
  ],
  technologies: populateTech([
    "javascript",
    "react",
    "node.js",
    "express.js",
    "postgresql",
    "webpack",
    "redux",
    "sass",
    "postman",
    "supabase",
    "html",
    "css",
    "git",
    "excalidraw",
  ]),
  resources: projects[4].resources,
};

export default projectClockin;
