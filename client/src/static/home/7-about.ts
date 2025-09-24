import bookImage from "@/assets/images/bookCover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/torontoMap.png";
import smileMemoji from "@/assets/images/smileFace.png";

const hobbyList = [
  {
    title: "Writing",
    emoji: "✍️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Meditation",
    emoji: "🧘",
    left: "50%",
    top: "5%",
  },
  {
    title: "Walking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Journaling",
    emoji: "📓",
    left: "10%",
    top: "35%",
  },
  {
    title: "Dancing",
    emoji: "💃",
    left: "70%",
    top: "45%",
  },

  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const ABOUT = {
    sectionHeader: {
        eyebrow: "About Me",
        title: "A Glimpse Into My World",
        description: "Learn more about who I am, what I do, and what inspires me."
    },
    bookSection: {
        title: "My Reads",
        description: "Explore the books shaping my perspectives."
    },
    bookImage: bookImage,
    toolboxSection: {
        title: "My Toolbox",
        description: "Explore the tools that I use to craft my self-proclaimed pieces of art"
    },
    toolboxItems: toolboxItems,
    hobbySection: {
        title: "Beyond the Code",
        description: "Explore my interest and hobbies beyond the digital realm"
    },
    hobbyList: hobbyList,
    locationMap: mapImage,
    mapMemojiIcon: smileMemoji
}
