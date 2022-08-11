import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import {Card_slide} from '../../../utils/CardDesign/CardSize'
import SliderContent from '../../../asset/contents/SliderContent'
import Color from '../../../asset/contents/Color'

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
    
    const Button = styled.button`
        height : 30px;
        width : 30px;
        border-radius : 50%;
        border : transparent;
        background : transparent;
        position : absolute;
        top : 50%;
        cursor : pointer;
    `

    const Container = styled.div`
        display : flex;
        width : ${Width}px;
    `

    const onMouseDownHandler = (e) => {
        console.log("slider track : mouse down", e)
        setDrag(true)
        setPrev(e.clientX)
    }

    const Title = styled.div`
        font-size : 40px;
    `

    const Text = styled.div`
    font-size : 20px;
`
    const TitleBox = styled.div`
        height : 120px;
        display : flex;
        flex-direction : column;
        justify-content : center;
        `

    const TextBox = styled.div`
        height : 50px;
    
    `

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

    const LeftButtonHandler = (e) => {
        let result = Left+Width

        if ( result > 0 ){
            result = 0 ;
        } 
        setLeft(result)
    }

    const RightButtonHandler = (e) => {
        let result = Left-Width
        if ( result < -Slides.length * Width + Width  ) {
            result = -Slides.length * Width + Width
        }
        setLeft(result)

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
    <Container>
    <Button onClick = {LeftButtonHandler} style = {{zIndex : '1', left : '360px'}}>{`<`}</Button>
    <SliderContainer >
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            Left = {Left}
            style = {{cursor : 'grab'}}
            
        >   
        {Slides.map((slide, index) => {
            return (<Card_slide key = {index} style = {{width : Width, display : 'flex', justifyContent: 'center',
                                background : `linear-gradient(90deg, ${Color[(index)%Color.length]}, ${Color[(index+1)%Color.length]})`}}>
                        <div style={{fontFamily : 'KoPubDotumMedium', 
                                    fontSize : '20px', 
                                    height : '100%', 
                                    display : 'flex', 
                                    flexDirection : 'column', 
                                    alignItems : 'center',
                                    width : '40%',
                                    justifyContent : 'center'
                                    }}>

                            <TitleBox>
                                <Title>{slide.FirstTitle}</Title>
                                <Title>{slide.SecondTitle}</Title>
                            </TitleBox>
                            <TextBox><Text>{slide.text}</Text></TextBox>
                        </div>
                       <div></div>
                    </Card_slide>)})}

        </SliderTrack>
    </SliderContainer>
    <Button onClick = {RightButtonHandler} style = {{right : '300px'}}>{`>`}</Button>
    </Container>
  )
}

export default SliderBanner
