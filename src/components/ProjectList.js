import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const x = projects.map(item => {
    return (
      <ProjectItem name={item.name} about={item.about} technologies={item.technologies} key={item.id}/>
    
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {x}
      </div>
    </div>
  );
}

export default ProjectList;
