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
        <Home/>
        <Intro/>
        <About />
        <Objectives/>
        <Route path="/achiev" component={Achiev} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
