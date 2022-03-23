import React from 'react'
import Card from '../../components/cards/Card'
import Head from '../../components/Head/Head'
import './Stocks.css'

function Stocks() {
  return (
    <>
        <div className="stocks__section">
            <div className="container">
                <Head title={"Акции"} more={"Все акции"} action={"stocks"}/>
                <div className="stocks">
                    <div className="cards">
                        <Card
                        stock={"-50%"}
                        price={{card: "44,50", default: "50,50"}}
                        name={"Г/Ц Блинчики с мясом вес, Россия"}
                        rating={"2"}
                        image={"images/card/image1.png"}
                        />
                        <Card
                        stock={"-50%"}
                        price={{card: "44,50", default: "50,50"}}
                        name={"Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."}
                        rating={"3"}
                        image={"images/card/image2.png"}
                        />
                        <Card
                        stock={"-50%"}
                        price={{card: "44,50", default: "50,50"}}
                        name={"Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан..."}
                        rating={"5"}
                        image={"images/card/image3.png"}
                        />
                        <Card
                        stock={"-50%"}
                        price={{card: "44,50", default: "50,50"}}
                        name={"Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро..."}
                        rating={"4"}
                        image={"images/card/image4.png"}
                        />

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stocks