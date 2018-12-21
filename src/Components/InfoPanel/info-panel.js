/* Modules */
import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class SBExpansionPanel extends Component {
  render() {
    return (
      <div className="info-panel">
        <ExpansionPanel className="info-panel__content" defaultExpanded={true}>
          <ExpansionPanelSummary
            className="info-panel__header"
            expandIcon={<ExpandMoreIcon className="expand-icon" />}
          >
            <strong className="">{this.props.header}</strong>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{this.props.children}</ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default SBExpansionPanel;
