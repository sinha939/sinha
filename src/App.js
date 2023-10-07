import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Team from "./Team";
import './App.css';
import Person from './Person';
import Card from './Card';
import LogIn from './LogIn';
import Home from './Page/Home';
import Service from './Page/Service';
import Portfolio from './Page/Portfolio';
import About from './Page/About';
import Navbar from './Page/Navbar';
import Contact from './Page/Contact';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}> Home </Route>
        <Route exact path='/Service' element={<Service />}> Service </Route>
        <Route exact path='/Portfolio' element={<Portfolio />}> Poerfolio </Route>
        <Route exact path='/About' element={<About />}> About </Route>
        <Route exact path='/Contact' element={<Contact />}> Contact </Route>
      </Routes>
      <Team />
      <LogIn />
    </div>
  );
}

export default App;
