import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
    {
      name: "project name",
      description: "project description",
      link: "project live link",
      repo: "project repo link",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
