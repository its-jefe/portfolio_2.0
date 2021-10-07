import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Nav from './components/Nav';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {

  /* pass these as props to nav */
  const [categories] = useState([
    { name: 'about', component: About },
    { name: 'portfolio', component: Portfolio },
    { name: 'contact', component: Contact },
    { name: 'resume', component: Resume },
  ]);

  // initializes 
  const [category, setCategory] = useState(categories[0]);

  // actually passes into Nav after this and capitalizes the string before
  const [headerTitle, setHeaderTitle] = useState(categories[0].name);


  console.log(BrowserRouter)
  // Pop and push from category array into Nav 
  return (
    <Router>
      <div id="App">
        <header id="Header">
          {/* Pass in 'props' to Nav component */}
          <Nav
            categories={categories}
            setCurrentCategory={setCategory}
            currentCategory={category}
            setHeaderTitle={setHeaderTitle}
          >
          </Nav>
          <div id="header-title">
            {headerTitle}
          </div>
        </header>
        <main>

          <Switch>
            <Route exact path={`/react-portfolio`} component={category.component} />
            {/* <Redirect to={`/react-portfolio/${category.name}`} /> */}
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;