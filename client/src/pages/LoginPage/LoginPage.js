import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import LoginSection from './LoginSection/LoginSection'

function LoginPage() {
  
  const [Login, setLogin] = useState(false)

  const loginHandler = () => {
    setLogin(true)
  }

  const Page = styled.div`
    background-image : url('https://images.unsplash.com/photo-1499257398700-43669759a540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); 
    width : 100vw;
    height : 100vh;
    background-size : cover;
    display: flex;
    justify-content: center;
    `

  const Container = styled.div`
    width : 200px;
    height : 100%;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;
  `

  const TitleContainer = styled.div`
    height : 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  `
  
  const Title = styled.div`
    font-size: 50px;
    color: white;
  `

  const LoginContainer = styled.div`
    height : 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  `

  const Button = styled.button`
    width : 100%;
    height : 40px;
    background-color: var(--yellow);
    border-radius : 15px;
    border: none;
    font-family: KoPubDotumLight;
    font-weight : 500;
    font-size : 12px;
    cursor : pointer;
  `

  const SignUp = styled.div`
    padding: 10px;
    width : 100%;
    height : 40px;
    color : white;
    text-decoration: underline;
    font-weight : 500;
    font-size : 12px;
    cursor : pointer;
    text-align: center;
  `


    if (Login){
      return (<div style = {{display : 'flex'}}>
      <Page style = {{width : '65vw'}}></Page>
      <LoginSection/>
      </div>
      )
    } else{
      return (
    <Page>
      <Container>
        <TitleContainer>
          <Title>
          <div>독서와</div>
          <div style ={{color : `var(--yellow)`}}>무제한</div>
          <div>친해지리</div>
          </Title>
        </TitleContainer>
        <LoginContainer>
          <Button onClick = {loginHandler}>로그인</Button>
          <SignUp>회원이 아니신가요? 회원가입</SignUp>
        </LoginContainer>
      </Container>
    </Page>)
      
    }
  
    
  
  
}

export default LoginPage