import React, { useState } from 'react'
import styled from 'styled-components'
const Section = styled.div`
        width : 35vw;
        height : 100vh;
        background: var(--white);
        display : flex;
        flex-direction : column;
        justify-content : center;
    `
    
    const Button = styled.button`
    width : 100%;
    height : 40px;
    background-color: var(--yellow);
    border-radius : 4px;
    border: none;
    font-family: KoPubDotumLight;
    font-weight : 500;
    font-size : 12px;
    cursor : pointer;
    margin : 10px 0;
  `

  const Container = styled.div`
    margin : 40px;

  `

  const Input = styled.input`
    width : 100%;
    height : 20px;
    margin : 5px 0;
    border: solid 1px var(--lightgray);
   
  `

function LoginSection() {
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Password, setPassword] = useState("")
    
    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()

        let body = {
            phoneNumber: PhoneNumber,
            password: Password
        }

        console.log(body)
    }

    
  return (
    <Section>
        <Container>
            <div style = {{padding : '10px 0'}}>
                <div style = {{fontFamily: 'KoPubDotumBold', fontSize : '24px'}}>독서와 무제한 친해지리</div>
                <div>10만 권 속에서 인생책을 찾아보세요</div>
            </div>
            <div style={{display : 'flex', flexDirection: 'column'}}>
                <form onSubmit={submitHandler}>
                    <div><Input value = {PhoneNumber} type= "text" placeholder='01012345678' onChange={onPhoneNumberHandler}></Input></div>
                    <div><Input value = {Password} type= "password" placeholder='비밀번호 입력' onChange={onPasswordHandler}></Input></div>
                    <Button type = 'submit'>로그인</Button>

                </form>


            </div>
            <div style = {{textAlign : 'center', margin: '10px 0'}}>
                <span>회원가입</span>
                <span> | </span>
                <span>비밀번호 찾기</span>
                <span> | </span>
                <span>기업회원 로그인</span>
            </div>
        </Container>

  </Section>
  )
}

export default LoginSection
