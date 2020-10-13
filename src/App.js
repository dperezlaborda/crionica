import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import Home from './sections/Home';
import Intro from './sections/Intro';
import About from './sections/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
