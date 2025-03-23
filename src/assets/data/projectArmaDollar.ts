// Data
import { projects } from "./projects";

// Utils
import { populateTech } from "../../utils/populateTech";

const projectArmaDollar = {
  name: "ArmaDollar",
  summary:
    "Track your dollars with ArmaDollar, a subscription tracker and budget manager",
  features: [
    "Secured user session with Google Account.",
    "Add, edit and delete your subscription in the app and begin to keep track.",
    "Track and cancel Free Trials on time and avoid unnecessary charges when the trial period is over.",
    "Set up Billing Cycle and Payment Date Reminders.",
    "Organize spendings and subscriptions in category for better management.",
    "Reminders and other communications are sent through emails.",
    "Compacted view for everything via User Dashboard.",
  ],
  technologies: populateTech([
    "javascript",
    "react",
    "node.js",
    "express.js",
    "mongodb",
    "vite",
    "tailwind css",
    "passport.js",
    "postman",
    "google cloud platform",
    "html",
    "css",
    "git",
    "excalidraw",
    "trello",
  ]),
  resources: projects[3].resources,
};

export default projectArmaDollar;
