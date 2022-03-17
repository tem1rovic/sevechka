import React from 'react'
import './Head.css'

function Head() {
  return (
    <>
    <div className="head">
        <h3 className='head__title'>Акции</h3>
        <a href="#" className="more-btn">
            <span>Все акции</span>
            <img src="images/arrow.png" alt="arrow" />
        </a>
    </div>
    </>
  )
}

export default Head