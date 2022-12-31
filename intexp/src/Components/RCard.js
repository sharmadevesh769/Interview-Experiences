import React from 'react'
import {Link}  from 'react-router-dom';
function RCard({title,p1,p2,p3}) {


  return (
    <div className='Resources'>
      <div className='Resources-Card'>
        <h3>{title}</h3>
        <div className='Resources-label'>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
        <Link to={`/RData?topic=${title}`}>View</Link>
      </div>
    </div>
  )
}

export default RCard;