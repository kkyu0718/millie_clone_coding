import React from 'react'
import RankSlider from '../../../utils/Slider/RankSlider'
import TitleBar from '../../../utils/Title/TitleBar'
import { API_KEY } from '../../../api/config'

function Rank() {

  const fetchBestSeller = {
    url : `api/bestSeller.api?key=${API_KEY}&categoryId=100&output=json`
  }
  return (
    <>
    <TitleBar title = {`지금 서점 베스트셀러`}></TitleBar>
    <RankSlider Data = {fetchBestSeller}/>
    </>
  )
}

export default Rank
