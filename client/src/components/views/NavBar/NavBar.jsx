import React from 'react';
import styled from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { logout } from '../../../_actions/user_actions';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const Button = styled.button`
    height : 24px;
    margin : 5px;
    border : none;
    background : #323232;
    color : white;
    font-size : 5px;
    border-radius : 4px;
    cursor: pointer;
  `
  
  const userData = useSelector(store=>store.user)
  const [Login, setLogin] = useState(userData.loginSuccess ? true : false)

  const logoutHandler = () => {
    dispatch(logout())
    setLogin(false)
  }

  const loginHandler = () => {
    navigate('login')
    setLogin(true)
  }

  return (
      <div style = {{ display : 'flex', justifyContent : 'center' , borderBottom: 'var(--border)', height : '40px', position: 'sticky', top : '0'}}>
        <div style = {{ width : '60vw' ,display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <div style = {{ }}>
            <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png" style = {{ height : '20px'}}/>
          </div>
            
          <div style = {{ display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
            <IoIosNotificationsOutline style = {{  height : '20px', width : '20px', margin : '5px' }}/>
            {Login ? 
              <Button onClick={logoutHandler}>로그아웃</Button>: 
              <Button onClick={loginHandler}>로그인</Button>
            }
          </div>
        </div>
      </div>
  )
}

export default NavBar