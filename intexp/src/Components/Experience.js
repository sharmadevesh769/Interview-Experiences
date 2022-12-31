import React from 'react'
import jwt from 'jwt-decode'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Experience = () => {
    const nav = useNavigate()
    const [que, setQue] = useState('')
    const [experience, setExperience] = useState([])
    const [addexp, setaddExp] = useState({
        company: "",
        desc: "",
        batch: "",
    })

    const token = localStorage.getItem('TOKEN');
    async function getData() {
        try {
            const { data: { exp }, isAuthenticated = true } = await axios.get('http://localhost:8000/api/exp', { headers: { 'Authorization': 'Bearer ' + token } })
            if (!isAuthenticated) {
                nav("/Signin");
                return;
            }
            exp.reverse();
            setExperience(exp)

            console.log(experience)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        // getExp();
        getData()
    }, [])
    return (
        <div className='Experience'>
            <div className='searchBar'>
                <input
                    type="text"
                    className='search-box'
                    placeholder='Search'
                    onChange={e => setQue(e.target.value)}
                />
            </div>
            {experience.filter(exp => exp.company.includes(que)).map(exp =>
                <div className='ShowExp'>
                    <h2 className='company'>{exp.company}</h2>
                    <div className='NB'>
                        <h3>{exp.batch}</h3>
                        <h3>Name</h3>
                        <h3>{exp.role}</h3>
                    </div>
                    <p className='descP'>{exp.desc}</p>
                </div>
            )}
        </div>
    )
}

export default Experience