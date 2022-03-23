import React from 'react'
import {Link} from 'react-router-dom'
import './Head.css'

function Head({title, more, action}) {
  return (
    <>
    <div className="head">
        <h3 className='head__title'>{title}</h3>
        <Link to={action} className="more-btn">
            <span>{more}</span>
            <img src="images/arrow.png" alt="arrow" />
        </Link>
    </div>
    </>
  )
}

export default Head