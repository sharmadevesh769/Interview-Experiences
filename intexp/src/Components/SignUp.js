import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
   const nav=useNavigate()
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",

  })


  const handelchange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = async(e) => {
    e.preventDefault()
    const { fname, lname, email, password, cpassword } = user
    console.log("HELLO")   
    if (fname && email && password && (password === cpassword)) {  
      
     const res= await axios.post("http://localhost:8000/api/register", user)
     if(res.status==404){
      alert("User Already Exists")
     }
     else{
      alert("Saved Successfuly")
     }
      
    }else{
      alert("Invalid Input")
    }

  }

  return (
    <div className='SignUp'>
      {console.log("User", user)}
      <h2>Sign Up</h2>
      <form className='Sign-form'>
        <div className='SignUp-Name'>

          <input
            name='fname'
            onChange={(e) => handelchange(e)}
            type="text"
            placeholder='First Name'
          />

          <input
            name='lname'
            onChange={(e) => handelchange(e)}
            type="text"
            placeholder='Last Name'
          />

        </div>
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

        <input
          name='cpassword'
          onChange={(e) => handelchange(e)}
          type="password"
          placeholder='Confirm Password'
        />

        <button type="submit" onClick={register} >Sign Up</button>

      </form>
      <hr />
      <p>Already Registered? <a href="/">Sign In</a></p>
    </div>
  )
}

export default SignUp