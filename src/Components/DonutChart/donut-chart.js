import * as d3 from "d3";

// Constants
const CHART_SUFFIX = "-donut-chart";
const LEGEND_SUFFIX = "-donut-legend";
const NAME_SUFFIX = "-name-text";

const CHART_NAME_DY = "0";
const LEGEND_DY = "1em";
const CHART_PADDING = 0.02;
const HOVER_SIZE = 15;

// Defaults
const defaultDiameter = 300;
const defaultThickness = 50;
const defaultColors = [
  "#9E0142",
  "#D53E4F",
  "#F46D43",
  "#FDAE61",
  "#FEE08B",
  "#FFFFBF",
  "#E6F598",
  "#ABDDA4",
  "#66C2A5",
  "#3288BD",
  "#5E4FA2"
];

let legendValues = [];

class DonutChart {
  constructor(data, idTag, text, options) {
    this.data = data;
    this.diameter = options.diameter || defaultDiameter;
    this.thickness = options.thickness || defaultThickness;
    this.colors = options.colors || defaultColors;
    this.defaultText = text;
    this.idTag = this.trim(idTag);
    this.radius = Math.min(this.diameter, this.diameter) / 2 - HOVER_SIZE;
    this.color = d3.scaleOrdinal().range(this.colors);
  }

  drawChart() {
    if (this.data && this.data.length > 0) {
      let element = document.getElementById(this.idTag);

      // Initialize Chart
      let donutChart = d3.select(element);
      let chartDiv = donutChart
        .append("div")
        .attr("id", this.idTag)
        .style("min-width", this.diameter)
        .style("min-height", this.diameter);

      let svg = chartDiv
        .append("svg")
        .attr("id", this.idTag + CHART_SUFFIX)
        .attr("width", this.diameter)
        .attr("height", this.diameter);

      let chart = svg
        .append("g")
        .attr(
          "transform",
          "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")"
        );

      let arc = d3
        .arc()
        .innerRadius(this.radius - this.thickness)
        .outerRadius(this.radius);

      this.arc = arc;

      let hoverArc = d3
        .arc()
        .innerRadius(this.radius - this.thickness)
        .outerRadius(this.radius + HOVER_SIZE);

      this.hoverArc = hoverArc;

      let pie = d3
        .pie()
        .value(d => {
          return d.value;
        })
        .padAngle(CHART_PADDING)
        .sort(null);

      // Draw Donut
      chart
        .selectAll("path")
        .data(pie(this.data))
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("class", "noSelect")
        .attr("fill", (d, i) => {
          return this.color(i);
        })
        .attr("id", d => {
          return "id_" + this.idTag + this.trim(d.data.name);
        })
        .on("mouseover", d => {
          this.mouseover(d.data);
        })
        .on("mouseout", d => {
          this.mouseout(d.data);
        })
        .each(function(d, i) {
          this._current = i;
        });

      // Create Text for inside the donut
      this.chartName = chart
        .append("text")
        .attr("id", this.idTag + NAME_SUFFIX)
        .attr("class", "name-text")
        .text(this.defaultText)
        .attr("text-anchor", "middle")
        .attr("dy", CHART_NAME_DY)
        .attr("stroke", "#646464")
        .attr("font-size", "16px")
        .attr("font-weight", "lighter")
        .attr("font-family", "sans-serif");

      // Create Legend Div
      let legend = donutChart
        .append("div")
        .attr("id", this.idTag + LEGEND_SUFFIX)
        .attr("class", "legend");

      // Create <text> and <svg> for each data type
      this.data.forEach((data, index) => {
        let div = legend
          .append("div")
          .attr("class", "legendValue noSelect")
          .on("mouseover", () => {
            this.mouseover(data);
          })
          .on("mouseout", () => {
            this.mouseout(data);
          });

        // Draw circle
        div
          .append("svg")
          .attr("width", 20)
          .attr("height", 20)
          .attr("class", "noSelect")
          .append("circle")
          .style("fill", () => {
            return this.color(index);
          })
          .attr("cx", 10)
          .attr("cy", 10)
          .attr("r", 10);

        let textElement = div.append("text");
        textElement
          .text(data.name)
          .attr("dy", LEGEND_DY)
          .attr("class", "valueText");
        legendValues.push({
          data: data,
          element: textElement
        });
      });
    }
  }

  /* Helper Functions */

  // Section Size Animation on Mouseover
  mouseover(data) {
    d3.select("#id_" + this.idTag + this.trim(data.name))
      .style("cursor", "pointer")
      .transition()
      .attr("d", this.hoverArc);

    this.chartName.text(data.name);
  }

  // Section Size Animation on Mouseout
  mouseout(data) {
    d3.select("#id_" + this.idTag + this.trim(data.name))
      .style("cursor", "pointer")
      .transition()
      .attr("d", this.arc);

    this.chartName.text(this.defaultText);
  }

  trim(string) {
    return string.replace(/ /, "");
  }
}

export default DonutChart;
