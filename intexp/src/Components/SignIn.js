import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignIn({setIsLoggedIn}) {
  const nav=useNavigate()
  
  const [user,setUser]=useState({
     
    email:"",
    password:"",
  })


  const handelchange=(e)=>{
    const{name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const login=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/api/login",user)
    .then(res=>{
      // console.log(res.data.token)
      localStorage.setItem('TOKEN',res.data.token);
      nav("/");
      setIsLoggedIn(true);
      // if(res.status===200){
      //  nav('/')
      // }
    })
  }

  return (

    <div className='SignIn'>
      {console.log("User",user)}
      <h2>Login</h2>
      <form className='Sign-form'  >

        <input
          name='email'
          onChange={(e) => handelchange(e)}
          type="email"
          placeholder='Email Id'
        />

        <input
          name='password'
          onChange={(e) => handelchange(e)}         
          type="password"
          placeholder='Password'
        />

        <button type="submit" onClick={login}>Login</button>

      </form>
      <hr />
      <p>New To IntEXP? <a href="SignUp">Sign Up</a></p>
    </div>
  )
}

export default SignIn