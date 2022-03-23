import React from 'react'
import Banner from '../components/banners/Banner'
import Header from '../components/Header/Header'
import Offer from './Main/Offer'
import Stocks from './Main/Stocks'
import Location from './Main/Location'
import NewProducts from './Main/NewProducts'
import Purchases from './Main/Purchases'
import Articles from './Main/Articles'
import Footer from '../components/Footer/Footer'


function Main() {
  return (
    <>
        <Header/>
        <Banner/>
        <Stocks/>
        <NewProducts/>
        <Purchases/>
        <Offer/>
        <Location/>
        <Articles/>
        <Footer/>
    </>
  )
}

export default Main