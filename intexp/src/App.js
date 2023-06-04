import React from "react";
import "./App.css";
import Nav from "./Components/Nav.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";
import Contact from "./Components/Contact.js";
import Resume from "./resumeBuilder/components/Resume.js"
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Resources from "./Components/Resources";
import RData from "./Components/RData";
import { useState, useEffect } from "react";
import Experience from "./Components/Experience";
import MyExp from "./Components/MyExp";
// import ResourcesCard from './Components/ResourcesCard';
import axios from "axios";
import SingleExperience from "./Components/SingleExperience";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function getUserLoginStatus() {
    const token = localStorage.getItem("TOKEN");
    try{
    const {
      data: { isAuthenticated },
    } = await axios.get("http://localhost:8000/api/isAuthorized", {
      headers: { Authorization: "Bearer " + token },
    });
    setIsLoggedIn(isAuthenticated);
  }catch(e){
    console.log(e);
  }
  }

  useEffect(() => {
    getUserLoginStatus();
  }, []);

  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Exp" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/SignIn"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/MyExp" element={<MyExp />} />
        <Route path="/RData" element={<RData />} />
        <Route path="/experience" element={<SingleExperience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
