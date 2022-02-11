import "./style.css"

import coverPhoto from "../../assets/cover/Bigger.png"
import Footer from "../../components/Footer"


function About() {

  return (
    <>
    <section id="About">
      <div>Hi, my name is Jeff</div>
      <div className="me">
        <div className="img-div">
          <img src={coverPhoto} alt=""></img>
        </div>
        <div className="fswb goldman"> Full Stack Web Developer </div>
      </div>
    </section>
      </>
  )
}

export default About