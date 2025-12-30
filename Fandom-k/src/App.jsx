import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styled';
import NotFoundPage from './pages/NotFoundPage';
import Landing from './pages/Landing';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import Landing from './pages/Landing.jsx';
import ListPage from './pages/ListPage/index';
import MyPage from './pages/MyPage/index.jsx';

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
            <Route path="/Mypage" element={<MyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CreditProvider>
    </>
  );
}

export default App;
