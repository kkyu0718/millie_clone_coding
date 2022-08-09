import React from 'react'
import Card_lg from '../../../utils/Card/Card_lg'
import Slider from '../../../utils/Slider/Slider'
import TitleBar from '../../../utils/Title/TitleBar'

function Recommendation() {
  return (
    <div>
      <TitleBar title = {'당신을 위한 추천'}/>
      <Slider Card = {Card_lg}/>
    </div>
  )
}

export default Recommendation
