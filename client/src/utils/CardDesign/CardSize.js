import React from 'react'
import { MdSportsRugby } from 'react-icons/md'
import styled from 'styled-components'


const Card_lg = styled.div`
  height : 420px;
  width : 300px;
  border-radius : 3%;
  display : flex;
  flex-direction : column;
  justify-content : space-around;
  align-items : center;
  border : ${`var(--border)`}
`

const Card_md = styled.div`
  height : 300px;
  width : 200px;
  background-color : red;
  border-radius : 3%;
`


const Card_sm = styled.div`
  height : 150px;
  width : 100px;
  background-color : red;
  border-radius : 3%;
`

const Card_slide = styled.div`
  height : 500px;
  border : var(--border)
  background : linear-gradient(rgb())
`

export {Card_lg, Card_md, Card_sm, Card_slide}
