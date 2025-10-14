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
        "Migrated an on-premise ERP to a cloud-native SaaS model on AWS , boosting uptime to 99.9% and cutting infrastructure costs by 25%.",
        "Containerized the ERP backend with Docker and deployed it on AWS Kubernetes (EKS) , enabling autoscaling to eliminate bottlenecks and manual server maintenance.",
        "Migrated the on-premise MySQL database to a high-availability AWS RDS instance , reducing query response times by 40% through performance optimization.",
        "Established a full CI/CD pipeline with AWS CodePipeline and secured the infrastructure using AWS WAF, VPCs, and IAM , leading to automated and secure deployments.",
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