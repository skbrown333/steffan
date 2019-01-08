import PlaceholderImageBlue from "../../images/computer-blue.jpg";
import PlaceholderImageRed from "../../images/computer-red.jpg";
import HubotImage from "../../images/hubot.svg";
import Wedding from "../../images/wedding-ring.jpg";

let projects = [
  {
    /* https://steffan.me */
    name: "develop",
    title: "https://steffan.me",
    image: null,
    links: {
      url: "https://github.com/skbrown333/steffan",
      github: "https://github.com/skbrown333/steffan"
    },
    description: `Personal portfolio created using the Javascript front-end framework React.`,
    topics: ["React"],
    options: {
      banner: true
    }
  },
  /* Hubot Assistant */
  {
    name: "hubot-assistant",
    title: "Hubot Assistant",
    image: HubotImage,
    links: {
      url: "https://www.npmjs.com/package/hubot-assistant",
      github: "https://github.com/skbrown333/hubot-assistant",
      npm: "https://www.npmjs.com/package/hubot-assistant"
    },
    description: `A Hubot function leveraging the Google Assistant API in order to bring
    a text based assistant to Slack.`,
    topics: ["Node.js"],
    options: {}
  },
  /* Poker Hand Evaluation */
  {
    name: "poker",
    title: "Poker Hand Evaluation",
    image: PlaceholderImageBlue,
    links: {
      url: "https://github.com/skbrown333/Poker-Hand-Evaluation",
      github: "https://github.com/skbrown333/Poker-Hand-Evaluation"
    },
    description: `A simple Javascript application that generates a poker hand and ranks it.`,
    topics: ["Javascript"],
    options: {}
  },
  /* Hubot Active Users */
  {
    name: "hubot-analytics",
    title: "Hubot Analyitcs",
    image: HubotImage,
    links: {
      url: "https://www.npmjs.com/package/hubot-active-users",
      github: "https://github.com/skbrown333/hubot-analytics",
      npm: "https://www.npmjs.com/package/hubot-active-users"
    },
    description: `A Hubot function that uses Google Analytics to get 
    a count of a websites active users.`,
    topics: ["Node.js"],
    options: {}
  }
];

export default projects;
