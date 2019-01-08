import React, { Component } from "react";
import InfoCard from "../../Components/InfoCard/info-card";
import Banner from "../../Components/Banner/banner";
import ProjectCard from "../../Components/ProjectCard/project-card";
import Constants from "../../Constants/js/constants";

class Main extends Component {
  render() {
    function getProjects() {
      let projects = Constants.projects.map(project => {
        return (
          <ProjectCard
            name={project.name}
            image={project.image}
            links={project.links}
            title={project.title}
            description={project.description}
            topics={project.topics}
            options={project.options}
          />
        );
      });

      return projects;
    }

    return (
      <div className="main">
        <Banner />
        <InfoCard />
        <ul className="project-container">{getProjects()}</ul>
      </div>
    );
  }
}

export default Main;
