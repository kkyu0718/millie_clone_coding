import React from 'react';
import styled from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";

function NavBar() {
  

  
  const Button = styled.button`
    height : 30px;
    border : none;
    background : #323232;
    color : white;
    font-size : 10px;
    border-radius : 4px;
  `
  
  return (
      <div style = {{ display : 'flex', justifyContent : 'center' , borderBottom: 'var(--border)', height : '70px'}}>
        <div style = {{ width : '60vw' ,display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
          <div style = {{ }}>
            <img src="https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png" style = {{ height : '25px'}}/>
          </div>
            
          <div style = {{ display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
            <IoIosNotificationsOutline style = {{  height : '30px', width : '30px', margin : '5px' }}/>
            <Button style = {{  margin : '5px'  }}>로그아웃</Button>
          </div>
        </div>
      </div>
  )
}

export default NavBar