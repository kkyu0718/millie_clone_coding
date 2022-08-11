import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import LandingPage from '../pages/LandingPage/LandingPage'
import Sidebar from './views/SideBar/SideBar';
import styled from "styled-components";


function App() {



  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/reader" element={<LandingPage/>} />
              <Route path="/search" element={<LandingPage/>} />
              <Route path="/my-library" element={<LandingPage/>} />
              <Route path="/management" element={<LandingPage/>} />
              <Route path="/setting" element={<LandingPage/>} />
            </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
