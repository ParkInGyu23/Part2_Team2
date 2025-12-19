import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
// import Lending from './pages/Lending';
import PageStyleGuide from './pageStyleGuide';

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/design" element={<PageStyleGuide />} />
          {/* <Route path="/" element={<Lending />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
