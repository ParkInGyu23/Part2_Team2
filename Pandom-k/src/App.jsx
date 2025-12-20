import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Lending from './pages/Lending';
import PageStyleGuide from './pageStyleGuide';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage/MyPage.jsx';

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/design" element={<PageStyleGuide />} />
          <Route path="/" element={<Lending />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
