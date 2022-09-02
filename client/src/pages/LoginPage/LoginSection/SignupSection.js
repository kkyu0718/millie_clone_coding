import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login, loginUser } from '../../../_actions/user_actions'
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

function SignupSection(props) {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    
    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    const submitHandler = async (e)=>{
        e.preventDefault()

        let body = {
            username: Username,
            password: Password
        }

        await axios.post('http://localhost:5000/auth/signup', body)
            .then(response => {
                alert("회원가입이 완료되었습니다.")
                props.setSignup(false)
                return response.data
            })
            .catch((err) => {
                if(err.response.status == 409){
                    alert("동일한 이름의 회원이 존재합니다.")
                }else{
                    console.log(err)
                }
            })
   

    }
    

    
  return (
    <Section>
        <Container>
            <div style = {{padding : '10px 0'}}>
                <div style = {{fontFamily: 'KoPubDotumBold', fontSize : '24px'}}>회원 가입</div>
                <div>10만 권 속에서 인생책을 찾아보세요</div>
            </div>
            <div style={{display : 'flex', flexDirection: 'column'}}>
                <form onSubmit={submitHandler}>
                    <div><Input value = {Username} type= "text" placeholder='01012345678' onChange={onUsernameHandler}></Input></div>
                    <div><Input value = {Password} type= "password" placeholder='비밀번호 입력' onChange={onPasswordHandler}></Input></div>
                    <Button type = 'submit'>회원 가입</Button>

                </form>


            </div>
      
        </Container>

  </Section>
  )
}

export default SignupSection
