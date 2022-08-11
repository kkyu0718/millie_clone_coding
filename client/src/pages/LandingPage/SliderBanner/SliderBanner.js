import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import {Card_slide} from '../../../utils/CardDesign/CardSize'
import SliderContent from '../../../asset/contents/SliderContent'


function SliderBanner({Width}) {

    const [Drag, setDrag] = useState(false)
    const [Prev, setPrev] = useState(0)
    const [Left, setLeft] = useState(0)
    const [Slides, setSlides] = useState([])


    useEffect(() => {
      
      setSlides(SliderContent)
    
    }, [])
    

    const SliderContainer = styled.div`
        height : auto;
        width : 100%;
        display : flex;
        overflow-x : scroll;
        &::-webkit-scrollbar {
            display: none;    
    `
    const SliderTrack = styled.div`
        transform : translateX(${Left}px);
        height : auto;
        width : ${Slides.length * Width}px;
        display : flex;    
        }
        `


    const onMouseDownHandler = (e) => {
        console.log("slider track : mouse down", e)
        setDrag(true)
        setPrev(e.clientX)
    }

    const onWindowMouseMoveHandler = (e) => {
        console.log("mouse move")
        setPrev(e.clientX)
        let Pres = e.clientX
        let move = Pres - Prev
        let result = Left + move
        if ( result > 0 ){
            result = 0 ;
        } else if ( result < -Slides.length * Width + Width  ) {
            result = -Slides.length * Width + Width
        }

        setLeft(result)

    }
    const onWindowMouseUpHandler = (e) => {

        setDrag(false)

        }
    
    useEffect(() => {

        if (Drag === true){
            window.addEventListener('mousemove', onWindowMouseMoveHandler);
            window.addEventListener('mouseup', onWindowMouseUpHandler); 
        } 
        return(
            () => {
                window.removeEventListener('mousemove', onWindowMouseMoveHandler);
                window.removeEventListener('mouseup', onWindowMouseUpHandler);
            }
        )
        } 
    , [Drag])



  return (
    <SliderContainer >
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            Left = {Left}
        >   
        {Slides.map((slide, index) => {
            return (<Card_slide key = {index} style = {{width : Width}}>
                        <div style={{fontFamily : 'KoPubDotumMedium', fontSize : '20px', height : '20%', display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
                            <div>{slide.FirstTitle}</div>
                            <div>{slide.SecondTitle}</div>
                            <div>{slide.text}</div>
                        </div>
                       
                    </Card_slide>)})}

        </SliderTrack>
    </SliderContainer>
  )
}

export default SliderBanner
