import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter, capitalizeWord } from '../utils/helpers';

import "./Header.scss"

function Header(props) {
  // destructure everything passed in
  const {
    categories,
    category,
    setCategory,
  } = props;

  document.onclick = function (e) {
    console.log(e.target)
  }

  useEffect(() => {
    // on category change...
    document.title = capitalizeFirstLetter(category.name);
  }, [category]);


  let aH = window.screen.availHeight
  let aW = window.screen.availWidth

  return (
    <header>
      <section className="name-container">
        <div className="name">
          <div className="jeff goldman">JEFF</div>
          <div className="timson-container">TIMSON
            <div className="timson-overlay goldman">TIMSON</div>
            <div className="timson-underlay goldman">TIMSON</div>
          </div>
        </div>
      </section>

      <nav className="goldman"
      >
        <ul id="test"
          tabindex="0"
          onFocus={() => {
            document.getElementById("test").classList.add("test1")
          }}
          onBlur={() => {
            document.getElementById("test").classList.remove("test1")
          }}
        >
          {categories.map((category) => (
            <li
              key={category.name}
            >
              <span
                onMouseDown={() => {
                  setCategory(category);
                  (document.getElementById(`${capitalizeFirstLetter(category.name)}`)).scrollIntoView({ behavior: "smooth" })
                }}
              >
                {capitalizeWord(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header