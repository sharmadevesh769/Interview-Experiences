import React from 'react'
import jwt from 'jwt-decode'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Experience = () => {
    const nav = useNavigate()
    const [experience, setExperience] = useState([])
    const [addexp, setaddExp] = useState({
        company: "",
        desc: "",
        batch: "",
    })
    const token = localStorage.getItem('TOKEN');
    async function getData() {
        try {
            const { data: { exp } } = await await axios.get('http://localhost:8000/api/exp', { headers: { 'Authorization': 'Bearer ' + token } })
            setExperience(exp)
            // console.log(data)
            console.log(experience)
        } catch (error) {
            console.log(error)
        }
    }
    async function getExp() {
        try {
            // console.log(token)
            const { isAuthenticated = true } = await axios.get('http://localhost:8000/api/exp', { headers: { 'Authorization': 'Bearer ' + token } })
            if (!isAuthenticated) {
                nav("/Signin");
                return;
            }
        } catch (err) {
            console.log(err);
            nav("/Signin");

        }
    }

    const handlechange = (e) => {
        const { name, value } = e.target
        setaddExp({
            ...addexp,
            [name]: value
        })
    }
    const addExp = async (e) => {
        e.preventDefault()
        // console.log("HELLO")   
        const ex = await axios.post("http://localhost:8000/api/exp", addexp, { headers: { 'Authorization': 'Bearer ' + token } })

    }
    useEffect(() => {

        getExp();
        getData()
    }, [])
    return (
        <div className='Experience'>
            <div className='AddExp'>
                <input type="text" name='company'
                    onChange={(e) => handlechange(e)} placeholder='Company Name' />
                <input type="text" name='batch'
                    onChange={(e) => handlechange(e)} placeholder='BATCH' />
                <input type="text" name='desc'
                    onChange={(e) => handlechange(e)} placeholder='Interview Experience' />
                <button type="submit" onClick={addExp} >Add Exp</button>
            </div>

            {experience.map(exp =>
                <div className='ShowExp'>
                    <h2>{exp.company}</h2>
                    <div className='NB'>
                        <h3>{exp.batch}</h3>
                        <h3>Name</h3>
                    </div>
                    <p>{exp.desc}</p>
                </div>

            )}

        </div>
    )
}

export default Experience