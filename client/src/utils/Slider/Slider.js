import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


function Slider({CardItem}) {

    const [Drag, setDrag] = useState(false)
    const [Prev, setPrev] = useState(0)
    const [Left, setLeft] = useState(0)
    

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
        width : ${3000}px;
        background-color : blue;
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
        } else if ( result < -1500 ) {
            result = -1500
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

    <SliderContainer>
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            Left = {Left}
        >   
        <CardItem/>

        </SliderTrack>
    </SliderContainer>
  )
}

export default Slider
