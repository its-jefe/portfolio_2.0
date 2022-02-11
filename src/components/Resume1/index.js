import React, { useEffect, useState } from "react";

import Footer from "../Footer"

import "./style.css"

function Resume() {


  const [resumeStyle, setResumeStyle] = useState()

  const [windowRatio, setWindowRatio] = useState((window.innerHeight + window.innerWidth) / 18)

  useEffect(() => {
    setResumeStyle({
      opacity: "1",
      // fontSize: `${windowRatio}%`
    })
  }, [window.innerHeight, window.innerWidth]);

  function resizeFunction() {
    setWindowRatio((window.innerHeight + window.innerWidth) / 18)
  }
  window.onresize = resizeFunction

  const skills = { // as a percentage
    "JavaScript": 70,
    "CSS3": 70,
    "HTML5": 70,
    "Git": 70,
    "React": 65,
    "Node.js": 60,
    "C": 60,
    "jQuery": 60,
    "Bootstrap": 60,
    "Python": 45,
    "MySQL": 40,
    "MongoDB": 30,
  }

  const fillStar = (value) => {
    // gets value from Object.values(skills)
    // then returns JSX with stars filled in
    let styleObj = {
      width: `${value}%`,
      marginRight: `${100 - value}%`,
    }

    // ★★★★★
    // ☆☆☆☆☆

    return (
      <div className="star-container">
        <div className="star-overlay">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div className="star-underlay" style={styleObj}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    )
  }

  const tools = {
    "VS Code": 70,
    "GitHub": 70,
    "Microsoft Office": 70,
    "Google Suite": 60,
    "Heroku": 60,
    "Firebase": 50,
  }

  return (
    <>
    <section
      id="Resume"
      style={resumeStyle}
    >
      <section className="resume-left row-1 flex-row goldman">
        <div>EXPERIENCE</div>
      </section>
      <section className="resume-right row-1 flex-row goldman">
        <div>SKILLS</div>
      </section>

      <section className="resume-left row-2 flex-col">
      </section>

      <section className="resume-right row-2 flex-row">
        <div className="grid"></div>
        <div className="skills-left flex-col firacode">
          {
            Object.keys(skills).map(skill => (
              <div>{skill}</div>
            ))
          }
        </div>
        <div className="skills-spacer"></div>
        <div className="skills-right flex-col">
          {
            Object.values(skills).map((skill, index) => (
              <>
                <div key={index}>{fillStar(skill)}</div>
              </>
            ))
          }
        </div>
      </section>

      <section className="resume-left row-3 flex-row goldman">
        <div>EDUCATION</div>
      </section>
      <section className="resume-right row-3 flex-row goldman">
        <div>TOOLS</div>
      </section>

      <section className="resume-left row-4 flex-col">
        Education?
      </section>

      <section className="resume-right row-4 flex-row">
        <div className="skills-left flex-col firacode">
          {
            Object.entries(tools).map(([name, value]) => (
              <div className="flex-row">
                <div>{name}</div>
                <div>{fillStar(value)}</div>
              </div>
            ))
          }
        </div>

      </section> 

    <Footer/>
    </section>
    </>
  )
}

export default Resume