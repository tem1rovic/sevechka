import React from 'react'
import Head from '../../components/Head/Head'
import ArticlesCard from '../../components/cards/ArticlesCard'
import './Articles.css'

function Articles() {
  return (
    <>
      <div className="articles__section">
        <div className="container">
          <Head title={"Статьи"} more={"Все статьи"}/>
          <div className="articles">
            <ArticlesCard
            image={"images/articles/image1.png"}
            date={"05.03.2021"}
            title={"Режим использования масок и перчаток на территории магазинов"}
            text={'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'}
            />
            <ArticlesCard
            image={"images/articles/image2.png"}
            date={"05.03.2021"}
            title={"Весеннее настроение для каждой"}
            text={"8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий."}
            />
            <ArticlesCard
            image={"images/articles/image3.png"}
            date={"22.02.2020"}
            title={"ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!"}
            text={"Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!"}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Articles