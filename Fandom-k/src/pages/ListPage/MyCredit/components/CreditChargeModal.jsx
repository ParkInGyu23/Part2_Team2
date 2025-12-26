import { useEffect, useState } from 'react';
import BaseModal from '../../../../components/BaseModal.jsx';
import {
  ButtonContent,
  ChargeButton,
  ChargeInput,
  Credit,
  RadioCircle,
  SelectButton,
  SuccessIcon,
} from '../../../../styles/Modal/CreditChargeModal.styled.js';
import creditImg from '../assets/icons/Credit.svg';
import { useCreditActions, useCreditValue } from '../../../../contexts/CreditContext.jsx';

function CreditChargeModal({ isOpen, onClose }) {
  const credit = useCreditValue();
  const updateCredit = useCreditActions();
  const [inputAmount, setInputAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const finalChargeAmount = selectedAmount ?? Number(inputAmount);
  const isDisabled = !finalChargeAmount || finalChargeAmount <= 0;
  const [modalStep, setModalStep] = useState('charge');

  const handleCharge = () => {
    const amountToCharge = selectedAmount ?? Number(inputAmount);
    updateCredit(credit + amountToCharge);

    setModalStep('success');
  };

  const handleClose = () => {
    setModalStep('charge');
    setSelectedAmount(null);
    setInputAmount('');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setInputAmount('');
      setSelectedAmount(null);
      setModalStep('charge');
    }
  }, [isOpen]);

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {modalStep === 'charge' && (
        <>
          <h2>크레딧 충전하기</h2>
          {[1000, 5000, 10000].map((amount) => (
            <SelectButton
              key={amount}
              $active={selectedAmount === amount}
              onClick={() => {
                setSelectedAmount(amount);
                setInputAmount('');
              }}
            >
              <ButtonContent>
                <Credit src={creditImg} alt="credit icon" />
                {amount}
              </ButtonContent>
              <RadioCircle $active={selectedAmount === amount} />
            </SelectButton>
          ))}

          <ChargeInput
            type="number"
            min="1"
            step="1"
            value={inputAmount}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '') {
                setInputAmount('');
                setSelectedAmount(null);
                return;
              }
              const numberValue = Number(value);
              if (numberValue <= 0) return;

              setInputAmount(value);
            }}
            onFocus={() => {
              setSelectedAmount(null);
            }}
            placeholder="직접 입력"
          />
          <ChargeButton disabled={isDisabled} onClick={handleCharge}>
            <Credit src={creditImg} alt="credit icon" $white $size={13} />
            충전하기
          </ChargeButton>
        </>
      )}
      {modalStep === 'success' && (
        <>
          <SuccessIcon src={creditImg} alt="credit icon" />
          <p>{Number(finalChargeAmount).toLocaleString()} 크레딧 충전이 완료되었습니다.</p>
          <ChargeButton onClick={handleClose}>확인</ChargeButton>
        </>
      )}
    </BaseModal>
  );
}

export default CreditChargeModal;
