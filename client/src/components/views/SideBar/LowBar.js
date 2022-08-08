import React from 'react'
import { GrDownloadOption, GrRefresh } from "react-icons/gr";
import styled from 'styled-components';

function LowBar() {

    const Layout = styled.div`
        width : 60px;
        display : flex;
        flex-direction : column;
        align-items : center;
      `

    const Img = styled.img`
        height : 100%;
        width : 100%;
      `

    const menus = [
        { name: "다운로드 아이콘", path: "/" , icon : <GrDownloadOption style = {{height : '50%', width : '50%'}}/>, img : 'download.jpg'},
        { name: "새로고침", path: "/", icon : <GrRefresh style = {{height : '50%', width : '50%'}}/>}
    ]

  return (
    <Layout>
      {menus.map((menu, index) => {
            return (
                <div style = {{height : '80px' , width : '50px', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    {menu.img ? 
                        <Img alt = 'millie' src = {`images/${menu.img}`}/>
                        : menu.icon}
                </div>
            );
          })}
    </Layout>
  )
}

export default LowBar
