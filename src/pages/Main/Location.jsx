import React from 'react'
import  './Location.css'
import Button from '../../components/buttons/Button'

function Location() {
  return (
    <>
      <div className="location__section">
        <div className="container">
            <h3 className="title">Наши магазины</h3>
          <div className="location">
            <div className="location__btn">
              <Button title={"п.Щельяюр"} dataType={"green"}/>
              <Button title={"д.Вертеп"} dataType={"gray"}/>
              <Button title={"с.Краснобор"} dataType={"gray"}/>
              <Button title={"д.Диюр"} dataType={"gray"}/>
            </div>
            <div className="location__img">
              <img src="images/location.png" alt="location" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location