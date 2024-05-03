import React from 'react'
import './Card.css'

const Card = ({kartinShekli,kartinBasligi,kartinParaqrafi}) => {
  return (
    <div className='card border-0'>
<img src={kartinShekli}alt="" className='blog-img' />
<div className="card-body p-0 py-3">
  <h1 className='card-title'>{kartinBasligi}</h1>
  <p>{kartinParaqrafi}</p>

  <div className="metadata">
  <img src="/assets/icons/favicon.svg" alt="" />
  <span className='moderator'>Pecode Team  <span id="tarix">22.03.2024</span></span>
</div>
</div>
    </div>
  )
}

export default Card