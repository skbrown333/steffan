import React, { Component } from "react";

import DonutChart from "../DonutChart/donut-chart";
import Constants from "../../Constants/js/constants";

let languages = Constants.technical_skills.languages;
let languageId = "programming-languages";
let languageOptions = {};
let languageText = "Languages";

let misc = Constants.technical_skills.misc;
let miscId = "other-skills";
let miscOptions = {
  colors: Constants.colors.donut_chart.red
};
let miscText = "Misc";

function drawChart() {
  let languageChart = new DonutChart(
    languages,
    languageId,
    languageText,
    languageOptions
  );
  languageChart.drawChart();

  let miscChart = new DonutChart(misc, miscId, miscText, miscOptions);
  miscChart.drawChart();
}

class TechnicalSkills extends Component {
  componentDidMount() {
    drawChart();
  }

  render() {
    return (
      <div className="technical-skills">
        <div id={languageId} className="donut-chart" />
        <div id={miscId} className="donut-chart" />
      </div>
    );
  }
}

export default TechnicalSkills;
