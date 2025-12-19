import { useState } from "react";
import { Button, ErrorMessage, Input, } from "./DonationModal.styled";
import BaseModal from "./BaseModal";

function DonationModal({ isOpen, onClose, myCredit, setMyCredit }) {

  const [donateAmount, setDonateAmount] = useState(""); // 후원 크레딧 금액
  const [error, setError] = useState(""); // 에러 메세지

  function handleDonate() {
    if(!donateAmount) {
      setError("후원 크레딧을 입력해주세요!");
      return;
    }

    if (Number(donateAmount) > myCredit) {
        setError("갖고 있는 크레딧보다 더 많이 후원할 수 없습니다!");
        return;
    }
    setError("");
    setMyCredit(myCredit - Number(donateAmount));
    onClose();
  }

function handleChange(e) {
    const value = e.target.value;

    setDonateAmount(value);

    if (!value) {
        setError("크레딧을 입력해주세요!");
    } else if (Number(value) > myCredit) {
        setError("갖고 있는 크레딧보다 더 많이 후원할 수 없습니다!");
    } else {
        setError("");
    }
}

  return (
      <BaseModal isOpen={isOpen} onClose={onClose}>
        <h1>후원하기</h1>
        <button onClick={onClose}>X</button>
        <Input
            type="number"
            value={donateAmount}
            onChange={handleChange}
            placeholder="크레딧 입력"
            $error={!!error}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleDonate}>후원하기</Button>
      </BaseModal>
  );
}

export default DonationModal;


// Input → State 업데이트 → 검증 → 상태 변경 → UI 변화