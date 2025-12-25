import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Lending from './pages/Lending';
import PageStyleGuide from './pageStyleGuide';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage/MyPage.jsx';
import { useState } from "react";
import DonationModal from "./components/donationModal";
import CreditChargeModal from "./components/CreditChargeModal";
import { CreditProvider } from './contexts/CreditContext';



function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false); // 후원 모달이 열려있는지
  const [isChargeOpen, setIsChargeOpen] = useState(false) // 충전 모달이 열려있는지
  const [selecetedIdol, setSelecetedIdol] = useState(null);
  const [myCredit, setMyCredit] = useState(() => {
    const saved = localStorage.getItem('credit');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('credit', String(myCredit));
  },[myCredit]);

  const handleOpenDonation = (idolData) => {
    setSelecetedIdol(idolData);
    setIsDonationOpen(true);
  };
  
  return (
    <>
      <GlobalStyle />
      현재 나의 크레딧 : {myCredit}
      <button onClick={() => setIsChargeOpen(true)}>충전하기</button>
      <button onClick={() => handleOpenDonation({
        name: "민지",
        group: "NewJeans",
        title: "2023 첫 광고",
        location: "강남역 광고",
        image: "idol_image_url..." 
      })}>
      후원하기
      </button>
      <CreditChargeModal
        isOpen={isChargeOpen}
        onClose={() => setIsChargeOpen(false)}
        myCredit={myCredit}
        setMyCredit={setMyCredit}
      >
      </CreditChargeModal>
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        idol={selecetedIdol}
        myCredit={myCredit}
        setMyCredit={setMyCredit}
      >
      </DonationModal>
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
