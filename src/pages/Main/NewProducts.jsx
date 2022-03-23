import React from 'react'
import Card from '../../components/cards/Card'
import Head from '../../components/Head/Head'
import './NewProducts.css'

function NewProducts() {
  return (
    <>
        <div className="newProducts__section">
            <div className="container">
                <Head title={"Новинки"} more={"Все новинки"}/>
                <div className="newProducts">
                    <div className="cards">
                        <Card
                        stock={false}
                        price={{card: "-", default: "599,99"}}
                        name={"Г/Ц Блинчики с мясом вес, Россия"}
                        rating={"2"}
                        image={"images/card/image5.png"}
                        />
                        <Card
                        stock={false}
                        price={{card: "-", default: "44,50"}}
                        name={"Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."}
                        rating={"3"}
                        image={"images/card/image3.png"}
                        />
                        <Card
                        stock={false}
                        price={{card: "-", default: "159,99"}}
                        name={"Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан..."}
                        rating={"5"}
                        image={"images/card/image4.png"}
                        />
                        <Card
                        stock={false}
                        price={{card: "-", default: "49,39"}}
                        name={"Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро..."}
                        rating={"4"}
                        image={"images/card/image2.png"}
                        />

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewProducts