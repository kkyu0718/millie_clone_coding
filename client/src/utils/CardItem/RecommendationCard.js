import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../api/config'
import {Card_lg, Card_sm} from '../CardDesign/CardSize'

function RecommendationCard() {
    const [Books, setBooks] = useState([])

    useEffect(() => {
        console.log("RecommendationCard.js useEffect")
        fetchRecommend();
      }, []);
    
    const fetchRecommend = async () => {
        axios.get(`api/recommend.api?key=${API_KEY}&categoryId=100&output=json`)
                                .then((res) => {
                                    console.log("res is ", res.data.item)
                                    setBooks(res.data.item)
                                    })
                                .catch((err) => {console.log("axios get 실패", err)})
        // console.log("request", request);
        // setBooks(request.data.results);
      };

    
    return(
       <>
        {Books.map((book, index) => {
            return (<Card_lg key = {index} >
                        {/* <div style={{fontFamily : 'KoPubDotumMedium', fontSize : '20px'}}>{book.title}</div>
                        <div><img src = {book.coverLargeUrl}/></div> */}
                    </Card_lg>)
        })}
        </>
    )
}

export default RecommendationCard
