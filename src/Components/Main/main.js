import React, { Component } from "react";
import InfoPanel from "../../Components/InfoPanel/info-panel";
import InfoCard from "../../Components/InfoCard/info-card";
import Banner from "../../Components/Banner/banner";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Banner />
        <InfoCard />
        <div className="info-panels">
          <InfoPanel>Work History</InfoPanel>
          <InfoPanel>Soft Skills</InfoPanel>
          <InfoPanel>Technical Skills</InfoPanel>
          <InfoPanel>Education</InfoPanel>
        </div>
      </div>
    );
  }
}

export default Main;
