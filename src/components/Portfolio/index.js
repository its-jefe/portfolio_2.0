import React, { useState, useReducer } from "react"

import "./style.css"


function Portfolio() {
  // add projects here 
  const [projects] = useState([
    {
      index: 0,
      name: "MERN Stack Game",
      repo: "https://github.com/its-jefe/Snak3r",
      deployment: "https://p3-snake.herokuapp.com/gamepage",
      info: {
        summary: "The beginnings of a snake game using React.",
        role: "Group Project: I was responsible for game logic and design/CSS. Took on some React routing as well",
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
    {
      index: 3,
      name: "Password Generator",
      repo: "https://github.com/its-jefe/Password-Generator",
      deployment: "https://its-jefe.github.io/Password-Generator/",
      info: {
        summary: "App that generates a random password based on user-selected criteria.",
        role: "Sole Author: Wrote the Javascript code to generate passcodes and added password criteria selection",
        tools: "HTML, CSS, JavaScript"
      }
    },
    {
      index: 4,
      name: "Note Taker",
      repo: "https://github.com/its-jefe/Note-Taker",
      deployment: "https://young-harbor-02832.herokuapp.com/",
      info: {
        summary: "Write, save, and delete notes! This application uses an Express.js back-end to save and retrieve note data from a JSON file.",
        role: "Sole Author: I wrote the back-end, connected the front-end, and then deployed the application to Heroku.",
        tools: "Javascript, ExpressJS, API, CSS, HTML"
      }
    },
    {
      index: 5,
      name: "Budget Tracker",
      repo: "https://github.com/its-jefe/Budget-Tracker",
      deployment: "https://fudge-it-budgit.herokuapp.com/",
      info: {
        summary: "A budget tracker linked to a MongoDB backend, that once downloaded, works offline and updates the database once connection is regained. I still need to work on offline functionality when not downloaded...",
        role: "Sole author: My first progressive web application! Took a functioning budget tracker and made it a PWA",
        tools: "HTML, CSS, Javascript, ExpressJS, Mongoose"
      }
    },
    {
      index: 6,
      name: "Mars Report",
      repo: "https://github.com/its-jefe/Mars-Report",
      deployment: "https://its-jefe.github.io/Mars-Report",
      info: {
        summary: "Used the Nasa Mars Weather Service API to get the weather on Mars! Then allows the user to pick a date and a rover to get corresponding photos on the chosen date from the chosen rover using Nasas Mars Rover Photos API.",
        role: "Group Project: I learned Tailwind CSS to handle the CSS. Also worked heavily on the API calls and backend functionality. Also messed with keyframes and adobe illustrator to add the spaceship",
        tools: "JavaScript, Tailwind, CSS, HTML, Adobe Illustrator"
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