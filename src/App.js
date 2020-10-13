import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import Home from './sections/Home';
import Intro from './sections/Intro';
import About from './sections/About';
import Objectives from './sections/Objectives';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
      <Objectives/>
    </div>
  );
}

export default App;
