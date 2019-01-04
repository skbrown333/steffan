import React, { Component } from "react";

import Chip from "@material-ui/core/Chip";
import CalendarIcon from "@material-ui/icons/CalendarTodayOutlined";

class Company extends Component {
  render() {
    let self = this;

    /**
     * Create a bulllet point for each detail
     */
    function getDetails() {
      let details = self.props.details;
      let bulletPoints = [];

      for (var i = 0; i < details.length; i++) {
        let detail = details[i];
        let bulletPoint = <div className="detail-bullet">{detail}</div>;
        bulletPoints.push(bulletPoint);
      }

      return bulletPoints;
    }

    /**
     * Create a chip for each skill
     */
    function getSkills() {
      let skills = self.props.skills;
      let chips = [];

      for (var i = 0; i < skills.length; i++) {
        let skill = skills[i];
        let chip = <Chip label={skill} className="skills-chip" />;
        chips.push(chip);
      }

      return chips;
    }

    return (
      <div className="company">
        <div className="company__header">
          <div className="company-title">{this.props.header}</div>
          <div className="company-position">{this.props.position}</div>
          <div className="company-duration">
            <CalendarIcon className="icon" />
            {this.props.start} - {this.props.end}
          </div>
        </div>
        <div className="company__content">
          <div className="company-content__details">{getDetails()}</div>
          <div className="company-content__skills">{getSkills()}</div>
        </div>
      </div>
    );
  }
}

export default Company;
