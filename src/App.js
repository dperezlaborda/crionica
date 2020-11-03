import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import Home from './sections/Home';
import Intro from './sections/Intro';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Achiev from './sections/Achiev';
import News from './sections/News'
import Contact from './sections/Contact';
import { Element } from 'react-scroll';
import Footer from './sections/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <Router>
          <Navbar />
          <Home />
          <Element name="scroll-to-intro">
            <Intro/>
          </Element>
          <Element name="scroll-to-about">
            <About/>
          </Element>
          <Element name="scroll-to-obj">
            <Objectives />
          </Element>
            <Switch>
              <Route exact path="/news" component={News} />
              <Route exact path="/achievments" component={Achiev} />
            </Switch>
        </Router>
        <Element name="scroll-to-contact">
          <Contact />
        </Element>
        <Footer/>
      </div>
  );
}

export default App;
