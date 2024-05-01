import React from 'react'
import './Card.css'

const Card = ({kartinShekli,kartinBasligi,kartinParaqrafi}) => {
  return (
    <div className='card border-0'>
<img src={kartinShekli}alt="" className='blog-img' />
<div className="card-body">
  <h1>{kartinBasligi}</h1>
  <p>{kartinParaqrafi}</p>
</div>
    </div>
  )
}

export default Card