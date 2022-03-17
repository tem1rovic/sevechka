import React from 'react'
import Banner2 from '../../components/banners/Banner2'
import Banner3 from '../../components/banners/Banner3'
import './Offer.css'


function Offer() {
  return (
    <>
        <div className="offer__section">
            <div className="container">
                <h3>Специальные предложения</h3>
                <div className="gap40"></div>
                <div className="offer">
                    <Banner2/>
                    <Banner3/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Offer