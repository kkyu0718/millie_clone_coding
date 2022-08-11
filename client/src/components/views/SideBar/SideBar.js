import React from "react";
import styled from "styled-components";
import Menu from './Menu'
import LowBar from "./LowBar";

function Sidebar() {
    // const Layout = styled.div`
    //     display : flex;
    //     flex-direction : column;
    //     justify-content : space-between;
    //     border-right : var(--border);
    //     position : fixed;
    //     top : 0; 
    //     height : 100%;
    //     width : auto;
    // `
    const Layout = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    border-right : var(--border);
    height : 100vh;
    position : sticky;
    top : 0;
`
  return (
    
    <Layout>
        <Menu/>
        <LowBar/>
    </Layout>
    
    
  )
}

export default Sidebar;