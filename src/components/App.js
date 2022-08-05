import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from 'react';
import LandingPage from './views/LandingPage/LandingPage'
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import TodoPage from './views/TodoPage/TodoPage';
function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/todo" element={<TodoPage/>} />

        </Routes>
        </BrowserRouter>

      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
