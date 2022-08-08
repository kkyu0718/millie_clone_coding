import React from 'react'
import styled from "styled-components";
import { BsPlusSquare, BsPersonCircle } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoLibraryOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";


function Menu() {
    const menus = [
        { name: "밀리의 서재", path: "/" , img : 'millie.png'},
        { name: "밀리의 서재|완독자수", path: "/", icon : <BsPlusSquare style = {{height : '50%', width : '50%'}}/>},
        { name: "밀리의 서재|검색", path: "/", icon : <MdOutlineManageSearch style = {{height : '50%', width : '50%'}}/>},
        { name: "내 서재", path: "/" , icon : <IoLibraryOutline style = {{height : '50%', width : '50%'}}/>},
        { name: "밀리의 서재|관리", path: "/" , icon : <BsPersonCircle style = {{height : '50%', width : '50%'}}/>},
        { name: "구분선", path: "/" , icon : <AiOutlineLine style = {{height : '50%', width : '50%'}}/>},
        { name: "설정", path: "/" , icon : <IoSettingsOutline style = {{height : '50%', width : '50%'}}/>},
      ];
    
      const Sidebar = styled.div`
        width : 60px;
        display : flex;
        flex-direction : column;
        align-items : center;
        border : 1px;
        padding-top : 10px;
      `

      const Img = styled.img`
        height : 50%;
        width : 50%;
      `
    
      return (
        <Sidebar>
          {menus.map((menu, index) => {
            return (
                <div style = {{height : '50px' , width : '50px', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    {menu.img ? 
                        <Img alt = 'millie' src = {`images/${menu.img}`}/>
                        : menu.icon}
                </div>
            );
          })}
        </Sidebar>
      );
}

export default Menu
