import React, { useState } from "react"

import "./Projects.scss"

import projectsJSON from "../assets/json/projects.json"

import { string2Array } from "../utils/helpers"

function Projects() {

  const [projects] = useState(projectsJSON.projects)

  let testArray = []

  return (
    <>
      <section id="Projects">
        <h1 id="banner">PROJECTS</h1>
        {projects.map((project, index) => (
          <div key={index} data-index={index} className="project-card">
              <button className="spinner"
                tabindex="0"
                onClick={() => {
                  let card = document.querySelector("[data-index="+`"${index}"]`)
                  
                  console.log(card)

                  if(card.classList.contains("test2")){
                    card.classList.remove("test2")
                  }else {
                    card.classList.add("test2")
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g><path d="M18.89,11.77l-3.8-1.67C14.96,10.04,14.81,10,14.65,10H14V5.5C14,4.12,12.88,3,11.5,3S9,4.12,9,5.5v8.15l-1.87-0.4 c-0.19-0.03-1.02-0.15-1.73,0.56L4,15.22l5.12,5.19C9.49,20.79,10,21,10.53,21h6.55c0.98,0,1.81-0.7,1.97-1.67l0.92-5.44 C20.12,13.03,19.68,12.17,18.89,11.77z M17.08,19h-6.55l-3.7-3.78L11,16.11V5.5C11,5.22,11.22,5,11.5,5S12,5.22,12,5.5v6.18h1.76 L18,13.56L17.08,19z" /></g>
                </svg>
              </button>
            <div className="front">
              <div className="content">
                <div className="project-title">
                  {project.title}
                </div>
                <div className="project-subtitle">
                  {project.subtitle}
                </div>
                <div className="tools">
                  {(string2Array(project.details.tools)).map((tool, index) => (
                    <div className="card">
                      {tool}
                    </div>
                  ))}
                </div>
                <div className="summary">
                  <div className="text">
                    {/* {project.details.summary} */}
                  </div>
                </div>
                <div className="role">
                  <div className="text">
                    {/* {project.details.role} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="content">
                <a className="iframe-container" href={project.deployment}>
                  <div className="iframe-nav"></div>
                  <iframe src={project.deployment} title={project.title} scrolling="no" loading="lazy"></iframe>
                </a>
                {/* HAVE SOME KIND OF LOADING WIDGET IF IFRAMES TAKE TIME */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Projects