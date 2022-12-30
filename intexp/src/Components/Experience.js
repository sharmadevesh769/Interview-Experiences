import React from 'react'
import jwt from 'jwt-decode'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react'


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
            const { data: { exp } } = await axios.get('http://localhost:8000/api/exp', { headers: { 'Authorization': 'Bearer ' + token } })
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

    async function delExp(){
        
    }
    const handlechange = (e) => {
        const { name, value } = e.target
        setaddExp({
            ...addexp,
            [name]: value
        })
    }
    const addExp = async (e) => {
        const ex = await axios.post("http://localhost:8000/api/exp", addexp, { headers: { 'Authorization': 'Bearer ' + token } })
        e.preventDefault()
    }
    useEffect(() => {

        getExp();
        getData()
    }, [experience])
    return (
        <div className='Experience'>
            <div className='AddExp'>
                <input type="text" name='company'
                    onChange={(e) => handlechange(e)} placeholder='Company Name' />
                <input type="text" name='batch'
                    onChange={(e) => handlechange(e)} placeholder='Grad Year' />
                <textarea rows="10" cols="50" type="textArea" name='desc'
                    onChange={(e) => handlechange(e)} placeholder='Interview Experience' />
                <button type="submit" onClick={addExp} >Add Exp</button>
            </div>
            <div className='MasterExp'>
                {experience.map(exp =>
                    <div className='ShowExp'>
                        <h2>{exp.company}</h2>
                        <div className='NB'>
                            <h3>{exp.batch}</h3>
                            <h3>Name</h3>
                        </div>
                        <p className='descP'>{exp.desc}</p>
                        <button type="submit">DELETE</button>
                    </div>

                )}
            </div>


        </div>
    )
}

export default Experience