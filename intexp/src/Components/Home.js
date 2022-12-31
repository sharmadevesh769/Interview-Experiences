import React, { useEffect, useState } from 'react'
import IMG from "../img/logo.png";
import axios from 'axios';
const Home = () => {

  // const[query,setquery]=useState("")
  // useEffect(() => {
  //   const fetchData=async()=>{
  //     const res=axios.get('http://localhost:8000/api/exp')
  //   }
  // }, [])
  


  return (
    <div className='Home'>
        <img src={IMG} width="200px" height="200px" alt="logo" className='logo' />
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
      <br />
      <div className='submit'>
        <h3>SUBMITTED BY:</h3>
        <h4>MANISH KUMAR (00715602719)</h4>
        <h4>NITIN (03715602719)</h4>
        <h4>PRITISH NAGPAL (05415602719)</h4>
        <h4>DEVESH KUMAR SHARMA (05615602719)</h4>
        <h4>UNDER SUPERVISION Of</h4>
        <h3>SHWETA CHAUDHARY</h3>
      </div>
    </div>
  )
}

export default Home