import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function SignIn() {

  
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
    axios.post("http://localhost:9002/login",user)
    .then(res=>alert(res.data.message))
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