import React from 'react'
import RCard from './RCard'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Resources = () => {
    const nav=useNavigate()
  async function getExp(){
    try {
      const token = localStorage.getItem('TOKEN');
      // console.log(token)
      const {isAuthenticated = true} =await axios.get('http://localhost:8000/api/exp',{headers:{'Authorization': 'Bearer '+token}})
      if(!isAuthenticated){
        nav("/Signin");
        return;
      }
    }catch(err){
      console.log(err);
      nav("/Signin");
      
    }
  }

  useEffect(() => {

 getExp();   
  }, [])
    return (
        <div>
            <h2 className='Resources-title'>Resources</h2>
            <div className='Res-Cont'>
                <RCard
                    title="DSA"
                    p1="Algorithm"
                    p2="Programming"
                    p3="Questions"
                />
                <RCard
                    title="OS"
                    p1="Notes"
                    p2="DeadLock"
                    p3="Questions"
                />
            </div>

        </div>
    )
}

export default Resources