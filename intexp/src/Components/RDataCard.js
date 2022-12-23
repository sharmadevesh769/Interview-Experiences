import React from 'react'

function RDataCard({title,Topic1,Topic2,Topic3,Link1,Link2}) {
  return (
    <div className='RDataCard'>
        <h2>{title}</h2>
        <div className='RDataCard-list'>
            <ul>
                <li>{Topic1}</li>
                <li>{Topic2}</li>
                <li>{Topic3}</li>
            </ul>
        </div>
        <div className='RDataCard-Link'>
            <a href={Link1}>Video</a>
            <a href={Link2}>Questions</a>
        </div>
    </div>
  )
}

export default RDataCard