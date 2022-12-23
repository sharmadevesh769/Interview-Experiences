import React from 'react'

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
        <a href="RData">View</a>
      </div>
    </div>
  )
}

export default RCard;