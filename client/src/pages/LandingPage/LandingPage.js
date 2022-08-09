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
import axios from 'axios'

function LandingPage() {
  axios.defaults.withCredentials = true

  async function fetchData() {
    const request = await axios.get(`api/bestSeller.api?key=DC7763651D7BEE5B122F23158553CAA8F7BF3849447E4723F6A5F76D6ED751F9&categoryId=100`);
    console.log("request is",request.data)
  }
  
  fetchData();

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