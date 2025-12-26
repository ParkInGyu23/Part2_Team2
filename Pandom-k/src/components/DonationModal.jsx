import { useEffect, useState } from "react";
import { Credit, DonateButton, DonateInput, ErrorMessage, ErrorSlot, IdolContainer, IdolGroup, IdolImage, IdolInfo, IdolTitle, InputWrap, SuccessIcon } from "./DonationModal.styled";
import BaseModal from "./BaseModal";
import creditImg from '../assets/icons/credit.svg'
import { useCreditActions, useCreditValue } from "../contexts/CreditContext";

function DonationModal({ isOpen, onClose, donationData }) {
  const credit = useCreditValue();
  const updateCredit = useCreditActions();
  const [donateAmount, setDonateAmount] = useState("");
  const isDisabled = !donateAmount || donateAmount <= 0;
  const [error, setError] = useState("");
  const [modalStep, setModalStep] = useState('donation');

  useEffect(() => {
  if (!isOpen) {
    setDonateAmount("");
    setError("");
    setModalStep('donation');
  }
}, [isOpen]);

  if (!isOpen || !donationData) return null;

  const handleDonate = () => {
    if (!donateAmount) {
      setError("후원 크레딧을 입력해주세요!");
      return;
    }

    setModalStep('success')
    updateCredit(credit - Number(donateAmount));
  };

  const handleClose = () => {
    setDonateAmount('')
    setModalStep('donation');
    onClose();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setDonateAmount(value);
    
    if (!value) {
      setError("크레딧을 입력해주세요!");
    } else if (Number(value) > credit) {
      setError("갖고 있는 크레딧보다 더 많이 후원할 수 없습니다!");
    } else {
      setError("");
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      {modalStep === 'donation' && (
        <>
          <h2>후원하기</h2>
          <IdolContainer>
            <IdolImage src={donationData.idol.profilePicture} alt={donationData.idol.name} />
            <IdolInfo>
              <IdolGroup>{donationData.idol.group}</IdolGroup>
              <IdolTitle>{donationData.title}</IdolTitle>
            </IdolInfo>
          </IdolContainer>

          <InputWrap>
            <DonateInput
              type="number"
              value={donateAmount}
              onChange={handleChange}
              placeholder="크레딧 입력"
              $error={!!error}
            />
            <Credit src={creditImg} />
            <ErrorSlot>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </ErrorSlot>
          </InputWrap>

          <DonateButton onClick={handleDonate} disabled={!!error || isDisabled}>
            후원하기
          </DonateButton>
        </>
      )}
      {modalStep === 'success' && (
        <>
          <SuccessIcon src={creditImg} alt="credit icon" />
          <p>{Number(donateAmount).toLocaleString()} 크레딧 후원이 완료되었습니다.</p>
          <DonateButton onClick={handleClose}>
            확인
          </DonateButton>
        </>
      )}
    </BaseModal>
  );
}

export default DonationModal;