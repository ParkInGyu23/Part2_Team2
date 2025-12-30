import { useEffect, useState, useRef } from 'react';
import BaseModal from '../../../../components/BaseModal';
import {
  ButtonContent,
  ChargeButton,
  ChargeInput,
  Credit,
  RadioCircle,
  SelectButton,
  SuccessIcon,
} from '../../../../styles/Modal/CreditChargeModal.styled';
import { palette } from '../../../../styles/Palette.styled';
// import creditImg from '../../../../assets/icons/IconCredit.svg';
import IconCredit from '../../../../assets/images/IconCredit';
import { useCreditActions, useCreditValue } from '../../../../contexts/CreditContext';

function CreditChargeModal({ isOpen, onClose }) {
  const credit = useCreditValue();
  const updateCredit = useCreditActions();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [modalStep, setModalStep] = useState('charge');
  const [hasInput, setHasInput] = useState(false);
  const inputRef = useRef(null)
  const isDisabled = !selectedAmount && !hasInput;

  const handleCharge = () => {
    const inputValue = Number(inputRef.current?.value || 0);
    const amountToCharge = selectedAmount ?? inputValue;

    if (!amountToCharge || amountToCharge <= 0) return;

    updateCredit(credit + amountToCharge);
    setModalStep('success');
  };

  const handleClose = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setHasInput(false);
    setSelectedAmount(null);
    setModalStep('charge');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      if (inputRef.current) inputRef.current.value = '';
      setHasInput(false)
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
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
                setHasInput(false);
              }}
            >
              <ButtonContent>
                {/* <Credit src={creditImg} alt="credit icon" /> */}
                <IconCredit height={16} shadowS />
                {amount}
              </ButtonContent>
              <RadioCircle $active={selectedAmount === amount} />
            </SelectButton>
          ))}

          <ChargeInput
            ref={inputRef}
            type="number"
            min="1"
            step="1"
            onChange={(e) => setHasInput(Number(e.target.value) > 0)}
            onFocus={() => { setSelectedAmount(null)}}
            placeholder="직접 입력"
          />
          <ChargeButton disabled={isDisabled} onClick={handleCharge}>
            {/* <Credit src={creditImg} alt="credit icon" $white $size={13} /> */}
            <IconCredit height={12} color={palette.white} shadowS />
            충전하기
          </ChargeButton>
        </>
      )}
      {modalStep === 'success' && (
        <>
          {/* <SuccessIcon src={creditImg} alt="credit icon" /> */}
          <IconCredit height={111} shadowL />
          <p> {(selectedAmount ?? Number(inputRef.current?.value || 0)).toLocaleString()} 크레딧 충전이 완료되었습니다.</p>
          <ChargeButton onClick={handleClose}>확인</ChargeButton>
        </>
      )}
    </BaseModal>
  );
}

export default CreditChargeModal;
