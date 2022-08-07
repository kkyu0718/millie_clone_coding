import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import LandingPage from './views/LandingPage/LandingPage'
import Sidebar from './views/SideBar/SideBar';
import styled from "styled-components";


function App() {

  const Layout = styled.div`
    height : 100vh;
    display : flex;
    flex-direction : row;  
  `

  const Page = styled.div`
    flex : 1;
  `

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <BrowserRouter>
        <Layout>
          <Sidebar/>
          <Page>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
            </Routes>
          </Page>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
