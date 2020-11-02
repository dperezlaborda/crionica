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
import { scroller } from 'react-scroll';
import Footer from './sections/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {


  const scrollType = {
    duration: 300,
    delay: 5000,
    smooth: true,
    offset: -10
  }

  const onClick = () =>{
    scroller.scrollTo("pie", scrollType);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <button onClick={() => onClick()}></button>
        <Intro/>
        <About/>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/objectives" component={Objectives} />
          <Route exact path="/achievments" component={Achiev} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Element name="pie">
          <Footer/>
        </Element>
        
      </div>
    </Router>
  );
}

export default App;
