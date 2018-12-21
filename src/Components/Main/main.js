import React, { Component } from "react";
import InfoPanel from "../../Components/InfoPanel/info-panel";
import InfoCard from "../../Components/InfoCard/info-card";
import Banner from "../../Components/Banner/banner";
import WorkHistory from "../../Components/WorkHistory/work-history";
import SoftSkills from "../../Components/SoftSkills/soft-skills";
import TechnicalSkills from "../../Components/TechnicalSkills/technical-skills";
import Education from "../../Components/Education/education";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <InfoCard />
        <div className="info-panels">
          <InfoPanel header="Work History">
            <WorkHistory />
          </InfoPanel>
          <InfoPanel header="Soft Skills">
            <SoftSkills />
          </InfoPanel>
          <InfoPanel header="Technical Skills">
            <TechnicalSkills />
          </InfoPanel>
          <InfoPanel header="Education">
            <Education />
          </InfoPanel>
        </div>
      </div>
    );
  }
}

export default Main;
