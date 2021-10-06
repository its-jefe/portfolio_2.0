import "./style.css"

import coverPhoto from "../../assets/cover/Bigger.png"

function About() {

  return (
    <div id="About">

      <h2> Jeff Timson </h2>
        <div id="img-div">
          <img src={coverPhoto} alt=""></img>
        </div>
      <h3 id="title"> Full Stack Web Developer </h3>
      <div>
        <p>Hey, my name is Jeff. Welcome to my portfolio built with react.</p>
      </div>

      <div id="uc-div">
        <p>Watch your step, this site is under construction!</p>
        <svg id="uc-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M1.992 6.448c.337-.668.898-1.783 1.227-2.448.13-.261.378-.415.669-.441 1.367-.125 4.243-.339 5.429-.417.547-.036.951.045 1.301.397l2.786 2.8c.251.252.392.593.391.948l-.005 9.035 2.946 2.465 2.719-2.996c.591-.65 1.662-.435 1.942.399.938 2.817 2.603 7.81 2.603 7.81h-12l4.063-4.472-6.059-5.071-1.749-1.464 1.96 3.557c.104.188.164.396.178.608l.396 6.045c.022.354-.223.797-.787.797-.368 0-.687-.253-.77-.611-.309-1.323-1.025-4.399-1.206-5.178-.028-.12-.087-.229-.17-.319-.549-.591-2.738-2.892-2.738-2.892s-2.804 6.666-3.561 8.525c-.113.277-.374.475-.748.475-.462 0-.809-.382-.809-.803 0-.146 1.745-8.569 2.322-11.638.07-.371.239-.717.49-1l1.08-1.217-3.503-2.932c-.507-.425.137-1.192.642-.767l.961.805zm6.854 5.735l1.8 1.507 1.952 1.634-1.061-5.948-2.691 2.807zm-5.961-4.988l1.671 1.398 2.791-3.146-2.73-.183-1.732 1.931zm11.653-7.195c1.35 0 2.446 1.096 2.446 2.446s-1.096 2.445-2.446 2.445c-1.349 0-2.446-1.095-2.446-2.445 0-1.35 1.097-2.446 2.446-2.446z" />
            <defs>
      <radialGradient id="uc-gradient"
            cx="50%" cy="50%" fr="60%" fx="40%" fy="40%"
            spreadMethod="repeat">
        <stop offset="0%" stop-color="#33b9b9"/>
        <stop offset="100%" stop-color="#d4ff4d"/>
      </radialGradient>
  </defs>

        </svg>
      </div>

    </div>
  )
}

export default About