import React from 'react'
import './Banner.css'

function Banner2({type, title, text, image}) {
  return (
    <>
        <div className={type}>
            <div className="offer__banner-info">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="offer__banner-img">
                <img src={image} alt="card" />
            </div>
        </div>
    </>
  )
}

export default Banner2