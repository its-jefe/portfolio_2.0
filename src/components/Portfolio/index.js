import React, { useState, useReducer } from "react"

import "./style.css"

function Portfolio() {

  // add prokects here 
  const [projects] = useState([
    {
      index: 0,
      name: "MERN Stack Game",
      repo: "https://github.com/its-jefe/Project-3",
      deployment: "https://p3-snake.herokuapp.com/",
      info: {
        summary: "Yada yada yada we made a game.",
        role: "Group Project: I was responsible for game logic and game CSS. Took on some React routing as well",
        tools: "HTML, CSS, JavaScript, Node, React, React-Router"
      }
    },
    {
      index: 1,
      name: "Quiz",
      repo: "https://github.com/its-jefe/Code-Quiz",
      deployment: "https://its-jefe.github.io/Code-Quiz/",
      info: {
        summary: "Basic quiz game applying JS logic and fun CSS animation",
        role: "Sole author",
        tools: "JavaScript, CSS, HTML, Adobe Illustrator"
      }
    },
    {
      index: 2,
      name: "Weather Dashboard",
      repo: "https://github.com/its-jefe/Weather-Dashboard",
      deployment: "https://its-jefe.github.io/Weather-Dashboard/",
      info: {
        summary: "Desgined the front end based on a mock photo and then implemented the OpenWeather API on the backend to get the weather of searched cities.",
        role: "Sole author",
        tools: "HTML, CSS, JavaScript, API, Bootstrap"
      }
    },
  ])
  // do something else if not deployed ..

  const [display, setDisplay] = useState(projects[0])

  // console.log(display)

  return (
    <div id="Portfolio">
      <div id="project-ui">
        <div id="row">
          <div id="button-container">
            {projects.map(project => (
              <button
                key={project.name}
                onClick={setDisplay.bind(this, project)}
              >{project.name}
              </button>
            ))
            }
          </div>
          <div id="iframe-container">
            <div id="nav-overlay">
              <a href={display.deployment} id="deploy-nav">Deployment</a>
              <a href={display.repo} id="repo-nav">Repo</a>
            </div>
            <iframe src={display.deployment} title={display.name}>
            </iframe>
          </div>
        </div>
      </div>
      <div id="project-info">
        <div id="summary">
          <div id="top">
            Summary
          </div>
          <div id="bottom">
            {display.info.summary}
          </div>
        </div>
        <div id="col">
          <div id="role">
            <div id="top">
              Role
            </div>
            <div id="bottom">
              {display.info.role}
            </div>
          </div>
          <div id="tools">
            <div id="top">
              Tools
            </div>
            <div id="bottom">
              {display.info.tools}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio