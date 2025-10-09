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
      title: "Full Stack Developer",
      job: "Renuka Softtech Pvt. Ltd.",
      date: "2023-2024",
      contents: [
        "Developed and maintained full-stack web applications using React, Node.js, Express, and MongoDB, delivering features to production on schedule.",
        "Partnered with cross-functional teams to design and roll out new functionality, directly improving user experience and customer satisfaction.",
        "Optimized performance by refactoring code and improving database queries, reducing page load times by 30%.",
        "Implemented responsive and accessible design practices, ensuring seamless usage across devices and browsers.",
      ],
    },
     {
      title: "Post-Graduation",
      job: "Specialization in Cloud Architecture, Administration and Database Applications",
      date: "2024-2025",
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
      date: "2020-2023",
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