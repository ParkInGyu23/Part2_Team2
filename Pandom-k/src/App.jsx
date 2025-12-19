import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
// import Lending from './pages/Lending';
import PageStyleGuide from './pageStyleGuide';
import ListPage from './pages/ListPage';

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/design" element={<PageStyleGuide />} />
          {/* <Route path="/" element={<Lending />} /> */}
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
