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
import {useState,useEffect} from 'react'
import Experience from './Components/Experience';
// import ResourcesCard from './Components/ResourcesCard';
import axios from 'axios';
function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  async function getUserLoginStatus(){
     const token = localStorage.getItem('TOKEN');
    const {data: {isAuthenticated}} = await axios.get("http://localhost:8000/api/isAuthorized",{headers:{'Authorization': 'Bearer '+token}});
    setIsLoggedIn(isAuthenticated);
  }
 
  useEffect(() => {
    getUserLoginStatus();
  },[])

  console.log(isLoggedIn)

  
  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Exp' element={<Experience />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/SignIn' element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Resources' element={<Resources />} />
        <Route path='/RData' element={<RData />} />
      </Routes>
    </div>
  );
}

export default App;
