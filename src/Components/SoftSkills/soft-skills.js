import React, { Component } from "react";

import DonutChart from "../DonutChart/donut-chart";
import Constants from "../../Constants/js/constants";

let data = [
  {
    name: "Teamwork",
    value: 50
  },
  {
    name: "Empathy",
    value: 30
  },
  {
    name: "Communication",
    value: 40
  },
  {
    name: "Problem Solving",
    value: 40
  }
];
let id = "soft-skills-donut-chart";
let options = {};
let text = "Soft Skills";
let colors = ["#E6F598", "#ABDDA4", "#66C2A5", "#3288BD", "#5E4FA2"];
options.colors = Constants.colors.donut_chart.green;

function drawChart() {
  let donutChart = new DonutChart(data, id, text, options);
  donutChart.drawChart();
}

class SoftSkills extends Component {
  componentDidMount() {
    drawChart();
  }

  render() {
    return (
      <div className="soft-skills">
        <div id={id} className="donut-chart" />
      </div>
    );
  }
}

export default SoftSkills;
