import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import Home from './sections/Home';
import Intro from './sections/Intro';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Achiev from './sections/Achiev';
import News from './sections/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
      <Objectives/>
      <Achiev/>
      <News />
    </div>
  );
}

export default App;
