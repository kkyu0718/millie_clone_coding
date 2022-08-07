import React from 'react'
import NavBar from '../NavBar/NavBar'
import Menu from './Menu/Menu'
import Slider from './Slider/Slider'
import MyInfo from './MyInfo/MyInfo'
import Recommendation from './Recommendation/Recommendation'
import Rank from './Rank/Rank'
import Today from './Today/Today'
import Footer from '../Footer/Footer'

function LandingPage() {
  return (
    <>
      <NavBar/>
      <Menu/>
      <Slider/>
      <MyInfo/>
      <Recommendation/>
      <Rank/>
      <Today/>
      <Footer/>
    </>
  )
}

export default LandingPage