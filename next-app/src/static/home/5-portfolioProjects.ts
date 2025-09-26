import aToZMovingImage from "@/assets/images/aToZMoving.png";
import indexShell from "@/assets/images/indexShell.png";
import cypher from "@/assets/images/cypher.png";

const projects = [
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
          "Implemented role-based access and compliance features, strengthening data security.",
      },
      {
        title:
          "Enhanced reporting dashboards, enabling faster and more informed decision-making.",
      },
    ],
    link: "https://drive.google.com/file/d/1oMBIHKIvWaGN31YHJi6r3EiSEgBiD71s/view",
    image: aToZMovingImage,
    cta: "See the Case Study",
  },
  {
    company: "Capstone Project",
    year: "2024",
    title: "Index Shell",
    results: [
      {
        title:
          "Developed a web tool to index and search shell commands, simplifying DevOps workflows.",
      },
      {
        title:
          "Improved search and tagging features, reducing time spent locating commands.",
      },
      {
        title:
          "Automated command execution, streamlining repetitive tasks for developers.",
      },
      {
        title:
          "Integrated AWS Lambda, Cognito, API Gateway, and DynamoDB for a secure, scalable backend.",
      },
    ],
    link: "https://github.com/dirghayu101/index-shell/tree/experiment",
    image: indexShell,
    cta: "Checkout the Repo",

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
    cta: "Checkout the Repo",
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
