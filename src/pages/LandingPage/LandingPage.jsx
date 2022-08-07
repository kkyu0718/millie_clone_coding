import React from 'react'
import NavBar from '../../components/views/NavBar/NavBar'
import Menu from '../../components/views/Menu/Menu'
import Slider from './Slider/Slider'
import MyInfo from './MyInfo/MyInfo'
import Recommendation from './Recommendation/Recommendation'
import Rank from './Rank/Rank'
import Today from './Today/Today'
import Footer from '../../components/views/Footer/Footer'

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