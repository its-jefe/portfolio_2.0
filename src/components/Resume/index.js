import resume_pdf from "../../assets/JeffTimson_Resume.pdf"
// import resume_photo from "../../assets/resume.png"

import "./style.css"

function Resume() {
  return (
    <div id="Resume">
      <div id="resume-container">
        {/* <img src={resume_photo} alt="background"></img> */}
        <iframe src={resume_pdf} title="resume"></iframe>
      </div>
      <a href={resume_pdf} target="">Download</a>
    </div>
  )
}

export default Resume