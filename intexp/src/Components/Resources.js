import React from 'react'
import RCard from './RCard'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Resources = () => {

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
                <RCard
                    title="DBMS"
                    p1="Notes"
                    p2="SQL"
                    p3="Questions"
                />
                <RCard
                    title="CN"
                    p1="Notes"
                    // p2="SQL"
                    p3="Questions"
                />
            </div>

        </div>
    )
}

export default Resources