import React, { Component } from "react";

import Company from "./Company/company";

class WorkHistory extends Component {
  render() {
    let companies = [
      {
        image: null,
        header: "Akitabox",
        position: "Software Engineer",
        skills: [
          "javascript",
          "nodejs",
          "expressjs",
          "mongodb",
          "html",
          "css",
          "angularjs",
          "react",
          "git",
          "agile/scrum"
        ],
        details: ["Here is a test bullet", "Here is another"]
      },
      {
        image: null,
        header: "Middleware",
        position: "Software Developer Intern",
        skills: ["perl", "html", "css", "javascript", "sql", "git", "linux"],
        details: []
      }
    ];

    function getCompanies() {
      return companies.map(company => {
        return (
          <Company
            image={company.image}
            header={company.header}
            position={company.position}
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
