import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import Home from './sections/Home';
import Intro from './sections/Intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
    </div>
  );
}

export default App;
