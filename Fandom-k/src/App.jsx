import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styled.js';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Lending from './pages/Landing';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage/MyPage.jsx';
import { CreditProvider } from './contexts/CreditContext.jsx';

function App() {
  return (
    <>
      <GlobalStyle />

      <CreditProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/design" element={<PageStyleGuide />} />
            <Route path="/" element={<Lending />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/MyPage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </CreditProvider>
    </>
  );
}

export default App;
