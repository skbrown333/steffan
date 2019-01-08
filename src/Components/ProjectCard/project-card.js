import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

import Banner from "../../Components/Banner/banner";

class ProjectCard extends Component {
  render() {
    let self = this.props;

    /**
     * Create a chip for each skill
     */
    function getTopics() {
      let topics = self.topics;
      let chips = [];

      for (var i = 0; i < topics.length; i++) {
        let skill = topics[i];
        let chip = (
          <Chip label={skill} className="topics-chip" variant="outlined" />
        );
        chips.push(chip);
      }

      return chips;
    }

    /**
     * Create the image div
     */
    function getImage() {
      if (self.options.banner) {
        return <Banner />;
      }
      if (self.links.url) {
        return (
          <div className={self.name}>
            <a href={self.links.url} target="_blank" />
            <img src={self.image} alt="" />
          </div>
        );
      }
      return (
        <div className={self.name}>
          <img src={self.image} alt="" />
        </div>
      );
    }

    function getLinks() {
      let links = [];
    }

    return (
      <Card className="project-card">
        <div className="project-card__image">{getImage()}</div>
        <div className="project-card__links">{getLinks()}</div>
        <div className="project-card__description">{self.description}</div>
        <div className="project-card__topics">{getTopics()}</div>
      </Card>
    );
  }
}

export default ProjectCard;
