type IndividualExperience = {
  title: string;
  job: string;
  date: string;
  contents: string[];
};

export type Experience = {
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  experienceBody: IndividualExperience[];
}

export const EXPERIENCES: Experience = {
  sectionEyebrow: "Real-world Engagements",
  sectionTitle: "My Experiences",
  sectionDescription: "My journey so far in the tech field.",
  experienceBody: [
     {
      title: "Software Engineer",
      job: "Merit Services",
      date: "2026 - current",
      contents: [
        "Modernized and streamlined the company’s WordPress-based IT infrastructure, while planning migration to a scalable React and Next.js web platform.",
        "Developed and deployed a cross-platform café ordering mobile application for iOS and Android using React Native and TypeScript.",
        "Designed and developed an administrative dashboard using Next.js and Supabase to support business operations and mobile app management.",
        "Enhanced CI/CD and development workflows using GitHub Actions with automated testing and deployment pipelines",
        "Created automation scripts for database provisioning, environment setup, Docker builds, and other repetitive development tasks, improving developer productivity and onboarding efficiency.",
      ],
    },
     {
      title: "Post-Graduation",
      job: "Specialization in Cloud Architecture, Administration and Database Applications",
      date: "2024 - 2025",
      contents: [
        "Graduated First Class with Distinction (CGPA: 4.0/4.0) and earned a place on the President's Honor List for all four semesters.",
        "Completed advanced coursework in cloud computing, covering architecture, administration, and database systems.",
        "Achieved AWS Developer - Associate certification, proving ability to design, develop, and maintain applications on AWS.",
        "Applied tools such as Docker, Kubernetes, Hadoop, Spark, SQL, and NoSQL databases to hands-on labs and projects.",
        "Explored cloud security, scalability, and cost optimization, producing solutions that balanced performance and efficiency.",
      ],
    },
    {
      title: "University Degree",
      job: "Bachelor's in Computer Science",
      date: "2020 - 2023",
      contents: [
        "Graduated First Class with Distinction (CGPA: 8/10).",
        "Studied and applied programming languages including C, C++, Java, and Python to solve coursework and project challenges.",
        "Built a strong foundation in algorithms, data structures, computer networks, and operating systems through academic projects and research.",
        "Developed web apps, managed databases, and applied software engineering practices in course projects.",
        "Worked on team assignments, improving collaboration, problem-solving, and communication skills.",
      ],
    },
  ],
}