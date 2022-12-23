import React from 'react'
import IMG from "../img/logo.png";
const Home = () => {
  return (
    <div className='Home'>
        <img src={IMG} width="200px" height="200px" alt="logo"  className='logo' />
        <h1 className='name'>Interview Experiences & Resources</h1>
        <input type="text" className='search-box' placeholder='Search' />
        
    </div>
  )
}

export default Home