import React, { Component } from "react";
import InfoPanel from "../../Components/InfoPanel/info-panel";
import InfoCard from "../../Components/InfoCard/info-card";
import Banner from "../../Components/Banner/banner";
import WorkHistory from "../../Components/WorkHistory/work-history";
import SoftSkills from "../../Components/SoftSkills/soft-skills";
import TechnicalSkills from "../../Components/TechnicalSkills/technical-skills";
import Education from "../../Components/Education/education";
import ProjectCard from "../../Components/ProjectCard/project-card";

import DevelopImage from "../../images/Desk.jpg";

class Main extends Component {
  render() {
    let text = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
    deserunt mollit anim id est laborum.`;
    return (
      <div className="main">
        <Banner />
        <InfoCard />
        <div className="project-container">
          <ProjectCard
            image={DevelopImage}
            description={text}
            topics={["React"]}
          >
            <Banner />
          </ProjectCard>
          <ProjectCard
            image={DevelopImage}
            description={text}
            topics={["React"]}
          />
          <ProjectCard
            image={DevelopImage}
            description={text}
            topics={["React"]}
          />
        </div>
      </div>
    );
  }
}

export default Main;
