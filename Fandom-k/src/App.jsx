import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styled';
import NotFoundPage from './pages/NotFoundPage';
import Landing from './pages/Landing';
import ListPage from './pages/ListPage';
import Mypage from './pages/Mypage';
import { CreditProvider } from './contexts/CreditContext';

function App() {
  return (
    <>
      <GlobalStyle />

      <CreditProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CreditProvider>
    </>
  );
}

export default App;
