import React, { Component } from "react";

/* Misc */
import DevelopSVG from "../../images/develop.svg";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="layer" />
        <img className="logo" src={DevelopSVG} alt="<develop./>" />
      </div>
    );
  }
}

export default Banner;
