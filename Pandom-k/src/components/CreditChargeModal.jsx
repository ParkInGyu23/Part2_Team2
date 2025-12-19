import { useState } from 'react';
import BaseModal from './BaseModal';
import { ChargeButton, ChargeInput, Credit, SelectButton } from './CreditChargeModal.styled.js';
function CreditChargeModal({ isOpen, onClose }) {
  const [chargeAmount, setChargeAmount] = useState('');
  const isDisabled = !chargeAmount || Number(chargeAmount) <= 0;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h2>크레딧 충전하기</h2>
      <SelectButton onClick={() => setChargeAmount(1000)}>1000</SelectButton>
      <SelectButton onClick={() => setChargeAmount(5000)}>5000</SelectButton>
      <SelectButton onClick={() => setChargeAmount(10000)}>10000</SelectButton>
      <ChargeInput
        type="number"
        value={chargeAmount}
        onChange={(e) => setChargeAmount(e.target.value)}
        placeholder="직접 입력"
      />
      <ChargeButton>
        <Credit />
        충전하기
      </ChargeButton>
    </BaseModal>
  );
}

export default CreditChargeModal;
