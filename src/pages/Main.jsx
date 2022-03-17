import React from 'react'
import Banner from '../components/banners/Banner'
import Header from '../components/Header/Header'
import Offer from './Main/Offer'
import Stocks from './Main/Stocks'



function Main() {
  return (
    <>
        <Header/>
        <Banner/>
        <div className="gap80"></div>
        <Stocks/>
        <div className="gap120"></div>
        <Stocks/>
        <div className="gap120"></div>
        <Stocks/>
        <div className="gap120"></div>
        <Offer/>
        <div className="gap120"></div>

    </>
  )
}

export default Main