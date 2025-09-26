import JavascriptIcon from "@/assets/icons/square-js.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PythonIcon from "@/assets/icons/python-icon.svg"
import CIcon from "@/assets/icons/c-icon.svg"
import TypescriptIcon from "@/assets/icons/typescriptIcon.svg"
import JavaIcon from "@/assets/icons/javaIcon.svg"
import SQLIcon from "@/assets/icons/sqlIcon.svg"
import MongoDBIcon from "@/assets/icons/mongoDBIcon.svg"
import PrismaIcon from "@/assets/icons/prismaIcon.svg"
import DynamoDBIcon from "@/assets/icons/dynamoDB.svg"
import NginxIcon from "@/assets/icons/nginxIcon.svg"
import DockerIcon from "@/assets/icons/dockerIcon.svg"
import GithubActionIcon from "@/assets/icons/githubActionsIcon.svg"
import NextJSIcon from "@/assets/icons/nextIcon.svg"
import TailwindIcon from "@/assets/icons/tailwindIcon.svg"
import ExpressIcon from "@/assets/icons/expressIcon.svg"
import NodeIcon from "@/assets/icons/nodeIcon.svg"
import FigmaIcon from "@/assets/icons/figmaIcon.svg"
import VSCodeIcon from "@/assets/icons/figmaIcon.svg"
import LambdaIcon from "@/assets/icons/lambdaIcon.svg"
import TerraformIcon from "@/assets/icons/terraformIcon.svg"
import KubernetesIcon from "@/assets/icons/kubernetesIcon.svg"
import GithubCopilotIcon from "@/assets/icons/githubCopilotIcon.svg"
import S3Icon from "@/assets/icons/s3Icon.svg"

type ToolDisplay = {
    title: string,
    iconType: any
}

// Programming languages
const programmingLanguages: ToolDisplay[] = [
    {
        title: "Javascript",
        iconType: JavascriptIcon
    },
    {
        title: "Python",
        iconType: PythonIcon
    },
    {
        title: "Typescript",
        iconType: TypescriptIcon
    },
    {
        title: "Java",
        iconType: JavaIcon
    },
    {
        title: "C",
        iconType: CIcon
    },
]

const webDevTools: ToolDisplay[] = [
    {
        title: "React",
        iconType: ReactIcon
    },
    {
        title: "Next",
        iconType: NextJSIcon
    },
    {
        title: "Node",
        iconType: NodeIcon
    },
    {
        title: "Express",
        iconType: ExpressIcon
    },
    {
        title: "Chrome Dev Tools",
        iconType: ChromeIcon
    },
    {
        title: "CSS",
        iconType: CSSIcon
    },
    {
        title: "Tailwind",
        iconType: TailwindIcon
    }
]

const databaseTools: ToolDisplay[] = [
    {
        title: "SQL",
        iconType: SQLIcon
    },
    {
        title: "Prisma",
        iconType: PrismaIcon
    },
    {
        title: "MongoDB",
        iconType: MongoDBIcon
    },
    {
        title: "DynamoDB",
        iconType: DynamoDBIcon
    }
]

const devOpsTools: ToolDisplay[] = [
    {
        title: "Git",
        iconType: GithubIcon
    },
    {
        title: "Nginx",
        iconType: NginxIcon
    },
    {
        title: "Docker",
        iconType: DockerIcon
    },
    {
        title: "Github Actions",
        iconType: GithubActionIcon
    }
]

const lessFamiliarTools: ToolDisplay[] = [
    {
        title: "Terraform",
        iconType: TerraformIcon
    },
    {
        title: "Kubernetes",
        iconType: KubernetesIcon
    },
    {
        title: "Lambda Functions",
        iconType: LambdaIcon
    },
    {
        title: "S3",
        iconType: S3Icon
    },
    {
        title: "Figma",
        iconType: FigmaIcon
    }
]

const otherTools: ToolDisplay[] = [
    {
        title: "VS Code",
        iconType: VSCodeIcon
    },
    {
        title: "Github Copilot",
        iconType: GithubCopilotIcon
    }
]

export const TOOLBOX_DETAIL = {

    sectionHeader: "My Toolbox",
    sectionDescription: "The technologies and tools that I use to craft my self-proclaimed pieces of art.",
    mainSection: {
        sectionHeading: "Major Interests",
        sectionDescription: "These are my area of interest. I am really curious about advances in these fields. I love to learn more about them!",
        sectionItems: ["Full Stack Development", "Cloud Computing", "Machine Learning", "Databases"]
    },

    subsections: [
        {
            sectionHeading: "Programming Languages",
            sectionDescription: "These are the programming languages that I am familiar with.",
            sectionItems: programmingLanguages
        },
        {
            sectionHeading: "Web Development Tools",
            sectionDescription: "These are the web development related tools that I frequently work with",
            sectionItems: webDevTools
        },
        {
            sectionHeading: "Database Tools",
            sectionDescription: "These are the database tools that I have worked with.",
            sectionItems: databaseTools
        },
        {
            sectionHeading: "DevOps Tools",
            sectionDescription: "These are the DevOps tools that I have worked with.",
            sectionItems: devOpsTools
        },
        {
            sectionHeading: "Other Tools",
            sectionDescription: "These are some general tools that I am familiar with.",
            sectionItems: otherTools
        },
        {
            sectionHeading: "Less Familiar Tools",
            sectionDescription: "These are the tools that I have worked with once in a while. I am acquainted with them but not as familiar.",
            sectionItems: lessFamiliarTools

        },   
    ]
}