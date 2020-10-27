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
import Footer from './sections/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Switch>
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/about" component={About} />
          <Route exact path="/objectives" component={Objectives} />
          <Route exact path="/achievments" component={Achiev} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
