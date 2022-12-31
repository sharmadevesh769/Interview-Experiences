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
            <div class="exp-grid">
                {experience.filter(my=>my.company.toLowerCase().includes(que)).map(my =>
                    <div class="course">
                        <div class="course-preview">
                            <h6>Anonymous</h6>
                            <h2>{my.company}</h2>
                            <h6>Batch: {my.batch}</h6>
                        </div>
                        <div class="course-info">
                            <h6>Role:{my.role}</h6>
                            <p>{my.desc} </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience