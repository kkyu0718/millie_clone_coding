import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../api/config'
import {Card_lg, Card_sm} from '../CardDesign/CardSize'

function RecommendationCard() {
    const [Books, setBooks] = useState([])

    useEffect(() => {
        fetchRecommend();
      }, []);
    
    const fetchRecommend = async () => {
        const request = await axios.get(`api/recommend.api?key=${API_KEY}&categoryId=100&output=json`);
        console.log("request", request);
        setBooks(request.data.results);
      };

    
    return(
        <div>
            books!
        {Books && Books.map((book, index) => {
            return (<Card_lg>book.title</Card_lg>)
        })}
        </div>
    )
}

export default RecommendationCard
