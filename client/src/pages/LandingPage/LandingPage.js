import React, { useRef, useState, useEffect } from 'react'
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
import {API_KEY} from '../../api/config'
import Sidebar from '../../components/views/SideBar/SideBar'
import LowBar from '../../components/views/SideBar/LowBar'
import { useSelector } from 'react-redux'

function LandingPage() {

  // async function fetchData() {
  //   const request = await axios.get(`api/bestSeller.api?key=${API_KEY}&categoryId=100`);
  //   console.log("request is",request.data)
  // }
  
  const [Width, setWidth] = useState(0)
  const user = useSelector(store => store.user)
  const username = user.loginSuccess?.username

  const MainPageRef = useRef()

  useEffect(() => {
    setWidth(MainPageRef.current.clientWidth)    
    window.addEventListener("resize", ()=>{    setWidth(MainPageRef.current.clientWidth)    })
    
  }, [])



  const Container = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
  `

  const Layout = styled.div`
    display : flex;
        
    `

  const MainPage = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
  `



  return (
    <Layout>
      <Sidebar />
      
      <MainPage ref = {MainPageRef}>
        <NavBar/>

        <Menu/>
        <SliderBanner Width = {Width} style = {{  width : {Width} }}/>

        <Container>
          <div style={{ width : '80vw'}}>
          {username && <MyInfo username = {username}/>}
          <Recommendation/>
          <Rank/>
          <Today/>
          </div>
        </Container>
        <Footer/>

      </MainPage>
    </Layout>
  )
}

export default LandingPage