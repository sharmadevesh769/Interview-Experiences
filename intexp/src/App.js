import React from 'react'
import './App.css'
import Nav from './Components/Nav.js';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import { Route, Routes } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Resources from './Components/Resources';
import RData from './Components/RData';
import About from './Components/About';
// import ResourcesCard from './Components/ResourcesCard';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/RData' element={<RData />} />
      </Routes>
    </div>
  );
}

export default App;
