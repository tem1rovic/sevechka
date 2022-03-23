import React from 'react'
import Banner2 from '../../components/banners/Banner2'
import './Offer.css'


function Offer() {
  return (
    <>
        <div className="offer__section">
            <div className="container">
                <h3>Специальные предложения</h3>
                <div className="gap40"></div>
                <div className="offer">
                    <Banner2
                      type={"red"}
                     title={"Оформите карту «Северяночка»"}
                      text={"И получайте бонусы при покупке в магазинах и на сайте"}
                      image={"images/banner/card.png"}
                      />
                    <Banner2
                      type={"green"}
                     title={"Покупайте акционные товары"}
                      text={"И получайте вдвое больше бонусов"}
                      image={"images/banner/basket.png"}
                      />
                </div>
            </div>
        </div>
    </>
  )
}

export default Offer