import PlaceholderImageBlue from "../../images/computer-blue.jpg";
import PlaceholderImageRed from "../../images/computer-red.jpg";
import HubotImage from "../../images/hubot.svg";
import Wedding from "../../images/wedding-ring.jpg";

let projects = [
  {
    /* https://steffan.me */
    name: "develop",
    image: null,
    links: {
      github: "https://github.com/skbrown333/steffan"
    },
    description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.`,
    topics: ["React"],
    options: {
      banner: true
    }
  },
  /* Hubot Assistant */
  {
    name: "hubot-assistant",
    image: HubotImage,
    links: {
      github: "https://github.com/skbrown333/hubot-assistant",
      npm: "https://www.npmjs.com/package/hubot-assistant"
    },
    description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.`,
    topics: ["Node.js"],
    options: {}
  },
  /* Poker Hand Evaluation */
  {
    name: "poker",
    image: PlaceholderImageBlue,
    links: {
      github: "https://github.com/skbrown333/Poker-Hand-Evaluation"
    },
    description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.`,
    topics: ["Javascript"],
    options: {}
  },
  /* Hubot Active Users */
  {
    name: "hubot-analytics",
    image: HubotImage,
    links: {
      github: "https://github.com/skbrown333/hubot-analytics",
      npm: "https://www.npmjs.com/package/hubot-active-users"
    },
    description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.`,
    topics: ["Node.js"],
    options: {}
  }
];

export default projects;
