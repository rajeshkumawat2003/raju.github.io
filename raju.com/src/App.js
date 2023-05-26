
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TopNav from './components/TopNav';
import Slider from './components/Slider';

function App() {
  return (
    <Router>
      <div className="App">

        <TopNav />
        <Switch>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Experience' element={<Experience />}></Route>
          <Route path='/Project' element={<Projects />}></Route>
          <Route path='/Slider' element={<Slider />}></Route>

        </Switch>


      </div>
    </Router>
    
  );
}

export default App;
