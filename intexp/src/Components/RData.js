import React from 'react'
import RDataCard from './RDataCard'
import axios from 'axios'
import {useSearchParams}  from 'react-router-dom'
import { useEffect,useState } from 'react'

import './RData.css'


function RData() {

  const [Res,setRes]=useState([]);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic');


  const fetchResponse=async()=>{
    const {data:{data}} = await axios.get(`http://localhost:8000/api/res/${topic}`);
    console.log(data);
    setRes(data);
}

useEffect(() => {
  fetchResponse();
},[topic])
  

  return (
    <div className='RCard_container'>
        {Res.map(val=><RDataCard
        title={val.title}
        Topic1={val.Topic1}
        Topic2={val.Topic2}
        Topic3={val.Topic3}
        Link1={val.Link1}
        Link2={val.Link2}
        />)}

        
    </div>
  )
}

export default RData