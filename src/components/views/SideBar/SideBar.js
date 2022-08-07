import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import Menu from './Menu'
import LowBar from "./LowBar";

function Sidebar() {
    const Layout = styled.div`
        display : flex;
        flex-direction : column;
        justify-content : space-between;
        border-right : solid 0.01px;
        border-color : #d2d2d2;
    `

  return (
    <Layout>
        <Menu/>
        <LowBar/>
    </Layout>
    
  )
}

export default Sidebar;