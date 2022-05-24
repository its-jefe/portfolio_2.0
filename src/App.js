import React, { useState, createContext, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, useHistory } from "react-router-dom";

// I believe i can use 'useHistory' instead of the localStorage method i have implemented... 
import Header from './components/Header.js'

import About from './components/About.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume2.js';
import Footer from './components/Footer.js';

import fullmoonface from './assets/moon/full-moon-face.png'
import newmoonface from './assets/moon/new-moon-face.png'

// OPTIMIZE!!!
// https://davidwalsh.name/javascript-debounce-function
// AKA set a timout on my event listeners

function App() {
  // TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST 

  const categories = [
    { name: 'about', component: About },
    { name: 'projects', component: Projects },
    { name: 'resume', component: Resume },
    { name: 'contact', component: Footer },
  ];

  /// - - - - - sessionStorage component logging - - - - - ///

  // using sessionStorage is likely unecessary
  // because i am using React Router
  // pretty sure there is an easier way 

  let greatDecider // simple index value
  // decider of greatDecider
  if (sessionStorage.getItem('categoryAnchor')) {
    greatDecider = sessionStorage.getItem('categoryAnchor')
  } else {
    greatDecider = 0
  }

  const [category, setCategory] = useState(categories[greatDecider]);
  sessionStorage.setItem('categoryAnchor', categories.map((e) => e.name).indexOf(category.name))

  ////////////////////////////////////////////////////////////////////////////////////////////

  // passes into Nav after this and capitalizes the string before

  const [mainStyle, setMainStyle] = useState({})

  const [windowHeight, getWindowHeight] = useState(window.innerHeight)
  const [windowWidth, getWindowWidth] = useState(window.innerWidth)

  const [theme, setState] = useState(
    {
      setting: "dark",
      img: newmoonface,
      styleObj: { background: "transparent" },
    }
  )

  const toggleTheme = () => {
    if (theme.setting === "dark") {
      // toggle
      console.log("changed to light mode")
      setState(
        {
          setting: "light",
          img: fullmoonface,
          styleObj: { background: "white" }
        }
      )
    }
    else {
      console.log("changed to dark mode")
      setState(
        {
          setting: "dark",
          img: newmoonface,
          styleObj: { background: "transparent" },
        }
      )
    }
  }

  useEffect(() => {
    // console.log("H:" + window.innerHeight + "px  W:" + window.innerWidth + "px")
    // console.log(windowHeight + windowWidth)

    // if Portrait
    if (window.innerHeight > window.innerWidth) {
      // console.log("portrait")
      setMainStyle(
        {
          // fontSize: "100%",
          // height: document.documentElement.clientHeight
        })
      // else Landscape
    } else {
      // console.log("landscape")
      setMainStyle(
        {
          // fontSize: (windowHeight + windowWidth / 18) + "px",
        })
    }
  }, [windowHeight, windowWidth]);

  function resizeFunction() {
    getWindowHeight(window.innerHeight)
    getWindowWidth(window.innerWidth)
  }
  window.onresize = resizeFunction

  // was an idea to shrink header on downscroll
  // and grow on upscroll
  const headerAdjuster = (e) => {
    console.log(e)
    console.log("scolling")
  }

  // Pop and push from category array into Nav 
  return (
    <div id="App">

      <button id="veil-toggle" onClick={toggleTheme}>
        <img src={theme.img}></img>
      </button>

      <Header
        categories={categories}
        category={category}
        setCategory={setCategory}
      ></Header>
      <main
      // style={mainStyle}
      // onScroll={headerAdjuster}
      >
        <About></About>
        <Projects
        styleObj={theme.styleObj}
        ></Projects>
        <Resume></Resume>
        {/* <Router> */}
        {/* <Switch> */}
        {/* change document.title */}
        {/* <Route exact path={`/`} component={category.component} /> */}
        {/* </Switch> */}
        {/* </Router> */}
        <Footer></Footer>
      </main>
      {/* <Footer /> */}


      <div id="veil" style={theme.styleObj}></div>
    </div>
  );
}

export default App;