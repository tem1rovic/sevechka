import React from 'react'
import './Banner.css'


function Banner() {
  return (
    <>
        <div className="banner__section">
            <div className="container">
                <div className="banner">
                    <img src="images/banner-img.png" alt="banner" />
                    <h2>Доставка бесплатно от 1000 ₽</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner