import React, { useEffect, useState } from "react";

import resumeJSON from "../../assets/json/resume.json"

import "./style.scss"

function Resume() {


  const [resumeStyle, setResumeStyle] = useState()

  useEffect(() => {
    setResumeStyle({
      opacity: "1",
      // fontSize: `${windowRatio}%`
    })
  }, []);


  return (
    <section
      id="Resume"
      style={resumeStyle}
    >

      <div className="intro">
      </div>

      <div className="skills">
        <div className="heading goldman">
          <span>SKILLS</span>
        </div>
        {resumeJSON.skills}
      </div>
      <div className="tools">
        <div className="heading goldman">
          <span>TOOLS</span>
        </div>
        {resumeJSON.tools}
      </div>

      <div className="work-experience">
        <div className="heading goldman"><span>WORK </span> <span>EXPERIENCE</span></div>
        {/* {(resumeJSON.work).map((resume, index) => (
          <table key={index}>
            <thead>
              <tr>{resume.position}</tr>
              <tr>{resume.location}</tr>
            </thead>
            <tr>
              <td>{resume.company}</td>
              <td>{resume.dates}</td>
            </tr>
            <tr>
              <td>
                <ul>
                  {
                    (resume.details).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))
                  }
                </ul>
              </td>
            </tr>
          </table>
        ))} */}
      </div>

    </section >
  )
}

export default Resume