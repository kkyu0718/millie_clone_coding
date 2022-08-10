import React from 'react'
import Card_lg from '../../../utils/CardDesign/CardSize'
import RecommendationCard from '../../../utils/CardItem/RecommendationCard'
import Slider from '../../../utils/Slider/Slider'
import TitleBar from '../../../utils/Title/TitleBar'

function Recommendation() {
  return (
    <div>
      <TitleBar title = {'당신을 위한 추천'}/>
      <Slider CardItem = {RecommendationCard}/>
    </div>
  )
}

export default Recommendation
