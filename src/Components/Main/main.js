import React, { Component } from "react";
import InfoCard from "../../Components/InfoCard/info-card";
import Banner from "../../Components/Banner/banner";
import ProjectCard from "../../Components/ProjectCard/project-card";
import PlaceholderImage from "../../images/computer-blue.jpg";
import PlaceholderImageRed from "../../images/computer-red.jpg";

class Main extends Component {
  render() {
    let text = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat.`;
    return (
      <div className="main">
        <Banner />
        <InfoCard />
        <div className="project-container">
          <ProjectCard description={text} topics={["React"]}>
            <Banner />
          </ProjectCard>
          <ProjectCard description={text} topics={["Node.js"]}>
            <div className="hubot-assistant">
              <img src={PlaceholderImage} alt="No Image" />
            </div>
          </ProjectCard>
          <ProjectCard description={text} topics={["Javascript"]}>
            <div className="poker">
              <img src={PlaceholderImageRed} alt="No Image" />
            </div>
          </ProjectCard>
          <ProjectCard description={text} topics={["Javascript"]}>
            <div className="poker">
              <img src={PlaceholderImageRed} alt="No Image" />
            </div>
          </ProjectCard>
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default Main;
