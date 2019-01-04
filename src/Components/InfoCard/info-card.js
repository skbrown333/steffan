import React, { Component } from "react";

/* Misc */
import Resume from "../../images/resume.pdf";
import CoverLetter from "../../images/cover-letter.pdf";
import GitHubLogo from "../../images/github-logo.png";
import LinkedInLogo from "../../images/linkedin-logo.png";
import PhoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import Button from "@material-ui/core/Button";

class InfoCard extends Component {
  render() {
    return (
      <div className="info-card">
        <div className="info-card__image" />
        <div className="info-card__content">
          <div className="content-header">Steffan Brown</div>
          <div className="content-field">Software Developer</div>
          <div className="content-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </div>
          <div className="contact-info">
            <div className="contact-info__phone">
              <PhoneIcon className="icon" /> +1-(651)-354-5613
            </div>
            <div className="contact-info__email">
              <EmailIcon className="icon" />
              skbrown333@gmail.com
            </div>
          </div>
        </div>
        <div className="info-card__footer">
          <Button className="button">
            <a className="button" href={Resume} target="_blank">
              Resume
            </a>
          </Button>
          <Button className="button">
            <a className="button" href={CoverLetter} target="_blank">
              Cover Letter
            </a>
          </Button>
          <img className="logo noSelect" src={LinkedInLogo} alt="" />
          <img className="logo noSelect" src={GitHubLogo} alt="" />
        </div>
      </div>
    );
  }
}

export default InfoCard;
