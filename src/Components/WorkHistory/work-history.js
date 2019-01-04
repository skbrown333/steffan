import React, { Component } from "react";

import Company from "./Company/company";
import Constants from "../../Constants/js/constants";

class WorkHistory extends Component {
  render() {
    /**
     * Get companies and create <Company />
     */
    function getCompanies() {
      return Constants.companies.map(company => {
        return (
          <Company
            image={company.image}
            header={company.header}
            position={company.position}
            start={company.start}
            end={company.end}
            details={company.details}
            skills={company.skills}
          />
        );
      });
    }

    return <div className="work-history">{getCompanies()}</div>;
  }
}

export default WorkHistory;
