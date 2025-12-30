import {
  MyCreditContainer,
  CreditInfo,
  CreditTitle,
  CreditPoint,
  ChargeButton,
  ReponsiveIconCredit,
} from '../../../styles/pages/List/MyCredit.styled';
import { palette } from '../../../styles/Palette.styled';
import { useCreditValue } from '../../../contexts/CreditContext';
import { useState } from 'react';
import CreditChargeModal from './components/CreditChargeModal';

const MyCredit = () => {
  const credit = useCreditValue();
  const [isChargeOpen, setIsChargeOpen] = useState(false);
  return (
    <>
      <MyCreditContainer>
        <CreditInfo>
          <CreditTitle>내 크레딧</CreditTitle>
          <CreditPoint>
            <ReponsiveIconCredit width={16} />
            {credit.toLocaleString()}
          </CreditPoint>
        </CreditInfo>
        <ChargeButton onClick={() => setIsChargeOpen(true)}>충전하기</ChargeButton>
        <CreditChargeModal
          isOpen={isChargeOpen}
          onClose={() => setIsChargeOpen(false)}
        ></CreditChargeModal>
      </MyCreditContainer>
    </>
  );
};

export default MyCredit;
