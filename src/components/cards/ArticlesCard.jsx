import React from 'react'
import './ArticlesCard.css'
import Button from '../buttons/Button'
function ArticlesCard({image, date, title, text,}) {
  return (
    <>
        <div className="articles__card">
            <div className="card__img">
            <img src={image} alt="card" />
            </div>
            <div className="card__body">
              <p className='date'>{date}</p>
              <h5 className='title'>{title}</h5>
              <p className='text'>{text}</p>
              <Button title={"Подробнее"} dataType={"green"}/>
            </div>
        </div>
    </>
  )
}

export default ArticlesCard