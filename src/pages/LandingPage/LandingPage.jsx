import React from 'react'
import NavBar from '../../components/views/NavBar/NavBar'
import Menu from '../../components/views/Menu/Menu'
import MyInfo from './MyInfo/MyInfo'
import Recommendation from './Recommendation/Recommendation'
import Rank from './Rank/Rank'
import Today from './Today/Today'
import Footer from '../../components/views/Footer/Footer'
import SliderBanner from './SliderBanner/Slider'

function LandingPage() {
  return (
    <>
      <NavBar sticky = "top"/>
      <Menu/>
      <SliderBanner/>
      <MyInfo/>
      <Recommendation/>
      <Rank/>
      <Today/>
      <Footer/>
    </>
  )
}

export default LandingPage