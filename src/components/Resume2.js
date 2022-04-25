import React, { useEffect, useState } from "react";

import resumeJSON from "../assets/json/resume.json"

import { customParser } from "../utils/helpers";

import "./Resume2.scss"

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
      <h1 id="banner">RESUME</h1>


      {/* <div className="intro">
      </div> */}

      <div className="skills">
        <div className="heading goldman">
          <span>SKILLS</span>
        </div>
        <div>
          {
            resumeJSON.skills[0].split(", ").sort().map((val, index, array) => {
              return customParser(val, index, array.length)
            })
          }
        </div>
      </div>
      <div className="tools">
        <div className="heading goldman">
          <span>TOOLS</span>
        </div>
        <div>
          {
            resumeJSON.tools[0].split(", ").sort().map((val, index, array) => {
              return customParser(val, index, array.length)
            })
          }
        </div>
      </div>

      <div className="work-experience">
        <div className="heading goldman"><span>WORK </span> <span>EXPERIENCE</span></div>
        {(resumeJSON.work).map((job, index) => (
          <table key={index}>
            <thead>
              <tr>
                <th>{job.position}</th>
                <th>{job.location}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{job.company}</td>
                <td>{job.dates}</td>
              </tr>
              <tr>
                <td>
                  <ul>
                    {
                      (job.details).map((detail, index) => (
                        <li key={index}>• {detail}</li>
                      ))
                    }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      <div className="education">
        <div className="heading goldman"><span>EDUCATION</span></div>
        {(resumeJSON.education).map((education, index) => (
          <table key={index}>
            <thead>
              <tr>
                <th>{education.institution}</th>
                <th>{education.location}</th>
              </tr>
            </thead>
            <tbody>
              {(education.studies).map((study, index) => (
                <tr key={index}>
                  <td>• {study.program}</td>
                  <td>{study.dates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </section >
  )
}

export default Resume