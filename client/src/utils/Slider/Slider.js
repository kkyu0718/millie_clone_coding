import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


function Slider({Card}) {

    const [Drag, setDrag] = useState(false)
    const [Prev, setPrev] = useState(0)

    const [Move, setMove] = useState(0)
    const [Left, setLeft] = useState(0)
    
    let sum = 0

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
        console.log("mouse down")
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
    

  return (<div>
    <div>left is {Left}</div>
    <div>move is {Move}</div>
    <div>sum is {sum + Move}</div>

    <SliderContainer>
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            Left = {Left}
        >
            
            
            <Card num = {1} ></Card>
            <Card num = {2}></Card>
            <Card num = {3}>card3</Card>
            <Card num = {4}>card4</Card>
            <Card num = {5}>card5</Card>
            <Card num = {6}>card6</Card>
            <Card num = {7}>card7</Card>
            <Card num = {8}>card8</Card>
            <Card num = {9}>card9</Card>
            <Card num = {10}>card10</Card>

        </SliderTrack>
    </SliderContainer>
    </div>
  )
}

export default Slider
