import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function Slider({Card}) {

    const [Drag, setDrag] = useState(false)
    const [Prev, setPrev] = useState(0)
    const [Move, setMove] = useState(0)
    const [Left, setLeft] = useState(0)

    // console.log("------start------")
    // console.log("Left : ", Left)
    // console.log("Right : ", Right)
    // console.log("Move : ", Move)


    const SliderContainer = styled.div`
    height : auto;
    width : 100%;
    display : flex;
    overflow-x : scroll;
    &::-webkit-scrollbar {
        display: none;    
`
    const SliderTrack = styled.div`
        position : relative;
        left : ${Left}px;
        height : auto;
        width : ${2400}px;
        background-color : blue;
        display : flex;    
        }
        `

    const onMouseDownHandler = (e) => {

        console.log("down",e)
        setDrag(true)
        setPrev(e.clientX)
    }

    const onMouseMoveHandler = (e) => {

        if (Drag === true) {
            let Pres = e.clientX
            setPrev( Pres )
            setMove( Pres - Prev )
            console.log(Move)

        }
    }

    const onMouseUpHandler = (e) => {

        console.log("up", e)
        setDrag(false)
    }

    const onMouseOutHandler = (e) => {
        console.log("out", e)
        setDrag(false)
    }

    useEffect(() => {
        // console.log('Move use Effect')
        // console.log("Left : ", Left)
        // console.log("Right : ", Right)
        // console.log("Move : ", Move)
        let Result = Left + Move
        if ( Result > 0 ){
            Result = 0 ;
        } else if ( Result < -2400 ) {
            Result = 2400
        }
        setLeft(Result)
    }, [Move])
    

  return (<div>
    <div>left is {Left}</div>
    <div>move is {Move}</div>
    <SliderContainer>
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            onMouseMove = {onMouseMoveHandler}
            onMouseUp = {onMouseUpHandler}
            onMouseOut = {onMouseOutHandler} 
            Left = {Left}
        >
            <Card >card</Card>
            <Card >card</Card>
            <Card >card</Card>
            <Card >card</Card>
            <Card >card</Card>
            <Card >card</Card>
        </SliderTrack>
    </SliderContainer>
    </div>
  )
}

export default Slider
