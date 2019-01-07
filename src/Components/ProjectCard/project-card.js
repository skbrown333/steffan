import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

class ProjectCard extends Component {
  render() {
    let self = this;

    /**
     * Create a chip for each skill
     */
    function getTopics() {
      let topics = self.props.topics;
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

    return (
      <Card className="project-card">
        <div className="project-card__image">{this.props.children}</div>
        <div className="project-card__topics">{getTopics()}</div>
        <div className="project-card__links" />
        <div className="project-card__description">
          {this.props.description}
        </div>
      </Card>
    );
  }
}

export default ProjectCard;
