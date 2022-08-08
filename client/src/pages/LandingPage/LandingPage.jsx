import React from 'react'
import NavBar from '../../components/views/NavBar/NavBar'
import Menu from '../../components/views/Menu/Menu'
import MyInfo from './MyInfo/MyInfo'
import Recommendation from './Recommendation/Recommendation'
import Rank from './Rank/Rank'
import Today from './Today/Today'
import Footer from '../../components/views/Footer/Footer'
import SliderBanner from './SliderBanner/SliderBanner'
import styled from 'styled-components'

function LandingPage() {

  const Container = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
  `
  return (
    <>
      <NavBar sticky = "top"/>
      <Menu/>
      <SliderBanner/>

      <Container>
        <div style={{ width : '60vw'}}>
        <MyInfo/>
        <Recommendation/>
        <Rank/>
        <Today/>
        <Footer/>
        </div>
      </Container>
    </>
  )
}

export default LandingPage