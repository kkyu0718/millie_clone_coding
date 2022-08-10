import React from 'react'
import RecommendationSlider from '../../../utils/Slider/RecommendSlider'
import TitleBar from '../../../utils/Title/TitleBar'
import { API_KEY } from '../../../api/config'

function Recommendation() {

  const fetchRecommend = {
    url : `api/recommend.api?key=${API_KEY}&categoryId=100&output=json`
  }


  return (
    <div>
      <TitleBar title = {'당신을 위한 추천'}/>
      <RecommendationSlider Data = {fetchRecommend}/>
    </div>
  )
}

export default Recommendation
