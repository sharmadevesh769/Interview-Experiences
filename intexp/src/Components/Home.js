import React, { useEffect, useState } from 'react'
import IMG from "../img/logo.png";
import pic from "../img/Online-University.svg"
import'./Home.css'
import axios from 'axios';
const Home = () => {

  return (
    <div className='Home'>
      <div className='title-img'>
        <img src={pic} width="600px" height="600px" alt="logo" className='logo' />
      </div>
         <div className='txt-container'>
         <h1 className='name'>Interview Experiences & Resources</h1>
        <h3 className='about-cnt'>Interview Experiences is a Web Application developed to provide interview
        experiences of seniors with different companies. The application will also
        provide different resources to prepare for interviews. Usually, students get
        confused while preparing for interview about what kind of question are going
        to be asked in interview. They don’t get a clear idea of what topics should be
        covered to get prepared for interview. Hence the Application is developed to
        provide them different interview experiences with the preparation resources.
        This project is user-friendly, individuals just have to search for the company
        or the topic. The Application will filter the stuff on the basic of the user
        demand.</h3>
         </div>
    </div>
  )
}

export default Home