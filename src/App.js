import React, { useState, createContext, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Header from './components/Header'

import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume2';
import Footer from './components/Footer';


// OPTIMIZE!!!
// https://davidwalsh.name/javascript-debounce-function
// AKA set a timout on my event listeners

function App() {
  // TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST  TEST 

  const categories = [
    { name: 'about', component: About },
    { name: 'resume', component: Resume },
    { name: 'projects', component: Projects },
  ];

  let greatDecider // simple index value
  
  // decider of greatDecider
  if (sessionStorage.getItem('categoryAnchor')){
    greatDecider = sessionStorage.getItem('categoryAnchor')
  } else {
    greatDecider = 0
  }
  
  const [category, setCategory] = useState(categories[greatDecider]);
  sessionStorage.setItem('categoryAnchor', categories.map((e) => e.name).indexOf(category.name))
  console.log(category)

  ////////////////////////////////////////////////////////////////////////////////////////////
  
  // passes into Nav after this and capitalizes the string before
  
  const [mainStyle, setMainStyle] = useState({})
  
  const [windowHeight, getWindowHeight] = useState((window.innerHeight))
  const [windowWidth, getWindowWidth] = useState((window.innerWidth))
  
  useEffect(() => {
    console.log("H:" + window.innerHeight + "px  W:" + window.innerWidth + "px")
    console.log(windowHeight + windowWidth)
    if (window.innerHeight > window.innerWidth) { // Portrait
      console.log("portrait")
      setMainStyle(
        {
          // fontSize: "100%",
        })
        
      } else { // Landscape
        console.log("landscape")
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

      // Pop and push from category array into Nav 
      return (
        <div id="App">

      {/* Pass in 'props' FOR the Nav component */}

      <Header
        categories={categories}
        category={category}
        setCategory={setCategory}
      ></Header>

      <main
        style={mainStyle}
      >
        <Router>
          <Switch>
            <Route exact path={`/`} component={category.component} />
          </Switch>
        </Router>
      </main>

      <Footer />

    </div>
  );
}

export default App;