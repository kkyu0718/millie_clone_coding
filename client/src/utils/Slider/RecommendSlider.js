import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { API_KEY } from '../../api/config'
import {Card_lg, Card_sm} from '../CardDesign/CardSize'

function RecommendationSlider({ Data}) {

    const [Drag, setDrag] = useState(false)
    const [Prev, setPrev] = useState(0)
    const [Left, setLeft] = useState(0)
    const [Books, setBooks] = useState([])

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("RecommendationCard.js useEffect")
        fetchRecommend(Data.url);
      }, []);

      const fetchRecommend = async (url) => {
                                axios.get(url)
                                .then((res) => {
                                    console.log("res is ", res.data.item)
                                    setBooks(res.data.item)
                                    })
                                .catch((err) => {console.log("axios get 실패", err)})
        // console.log("request", request);
        // setBooks(request.data.results);
      };


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
        width : ${Books.length * 300}px;
        display : flex;    
        }
        `

    const Img = styled.img`

        
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
        } else if ( result < -Books.length * 300 + inputRef.current.clientWidth  ) {
            result = -Books.length * 300 + inputRef.current.clientWidth
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

    <SliderContainer ref = {inputRef}>
        <SliderTrack 
            onMouseDown = {onMouseDownHandler} 
            Left = {Left}
        >   
        {Books.map((book, index) => {
            return (<Card_lg key = {index}>
                        <div style={{fontFamily : 'KoPubDotumMedium', fontSize : '20px', height : '20%', display : 'flex', alignItems : 'center'}}>
                            <div>{book.title}</div>
                        </div>
                        <div style = {{height : '80%'}}>
                            <a href = {book.link}><Img src = {book.coverLargeUrl}/></a>
                        </div>
                    </Card_lg>)})}

        </SliderTrack>
    </SliderContainer>
  )
}

export default RecommendationSlider
