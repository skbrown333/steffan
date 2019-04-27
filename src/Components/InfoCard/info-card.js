import React, { Component } from "react";

/* Misc */
import Resume from "../../images/resume.pdf";
import EmailIcon from "@material-ui/icons/AlternateEmailSharp";
import Button from "@material-ui/core/Button";
import ProfileIcon from "../../images/profile-icon.png";

class InfoCard extends Component {
  render() {
    return (
      <div className="info-card__padding">
        <div className="info-card">
          <div className="info-card__image">
            <img src={ProfileIcon} alt="" />
          </div>
          <div className="info-card__content">
            <div className="content-header">Steffan Brown</div>
            <div className="content-field">Software Developer</div>
            <div className="content-bio">
              I am a full stack software developer specializing in the
              MEAN/MEARN stack. My passion for software development pushes me to
              continuously grow and learn about new and evolving technologies.
              Outside of the office, I spend time on side projects to explore
              relevant topics and to step outside of my comfort zone. This has
              helped me to grow as a developer and has been an integral part of
              my education.
            </div>
            <div className="contact-info">
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
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCard;
