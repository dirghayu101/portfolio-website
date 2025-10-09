import aToZMovingImage from "@/assets/images/aToZMoving.png";
import webBuilder from "@/assets/images/webBuilder.png";
import cypher from "@/assets/images/cypher.png";

const projects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "AI-Powered Web Builder Platform",
    results: [
      {
        title:
          "Architected a multi-agent AI system using OpenAI GPT-4 and Google Gemini, enabling conversational website generation with 95% production-ready code accuracy.",
      },
      {
        title:
          "Implemented real-time sandboxed environments with E2B Code Interpreter, allowing instant preview and execution of generated Next.js applications.",
      },
    ],
    link: "https://web-builder-gray-one.vercel.app/",
    image: webBuilder,
    cta: "Try for yourself",

  },
  {
    company: "A-Z Moving",
    year: "2025",
    title: "CRM System",
    results: [
      {
        title:
          "Built a custom CRM as a cost-effective alternative to Salesforce, tailored to client workflows.",
      },
      {
        title:
          "Designed a clean, user-friendly interface that boosted client adoption and satisfaction.",
      },
      {
        title:
          "Enhanced reporting dashboards, enabling faster and more informed decision-making.",
      },
    ],
    link: "https://drive.google.com/file/d/1oMBIHKIvWaGN31YHJi6r3EiSEgBiD71s/view",
    image: aToZMovingImage,
    cta: "Case Study",
  },
  {
    company: "Cybernetics Association",
    year: "2023",
    title: "Cypher",
    results: [
      {
        title:
          "Created a competition platform for 100+ participants, achieving a 100% satisfaction rate.",
      },
      {
        title:
          "Deployed on Google Cloud Platform, ensuring scalability during live events.",
      },
      {
        title:
          "Enabled real-time interaction using Socket.io and Firebase with Express, and secured access with Google OAuth.",
      },
    ],
    link: "https://github.com/dirghayu101/cypher-event",
    image: cypher,
    cta: "Source Repository",
  },
];


const keywords = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const PORTFOLIO_PROJECTS = {
  sectionHeader: {
    eyebrow:"Real-world Results",
    title:"Featured Projects",
    description:"See how I transformed concepts into engaging digital experiences."
  },
  projects: projects,
  keywords: keywords
}
