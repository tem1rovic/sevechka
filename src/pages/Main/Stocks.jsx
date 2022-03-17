import React from 'react'
import Card from '../../components/cards/Card'
import Head from '../../components/Head/Head'
import './Stocks.css'

function Stocks() {
  return (
    <>
        <div className="stocks__section">
            <div className="container">
                <div className="stocks">
                    <Head/>
                    <div className="cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Stocks