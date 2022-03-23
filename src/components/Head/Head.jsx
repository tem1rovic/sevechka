import React from 'react'
import './Head.css'

function Head({title, more}) {
  return (
    <>
    <div className="head">
        <h3 className='head__title'>{title}</h3>
        <a href="#" className="more-btn">
            <span>{more}</span>
            <img src="images/arrow.png" alt="arrow" />
        </a>
    </div>
    </>
  )
}

export default Head