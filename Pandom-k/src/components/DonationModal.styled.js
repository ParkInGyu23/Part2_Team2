import styled from "styled-components";
import creditImg from "../assets/icons/credit.svg";

export const Input = styled.input`
  background-color: #272f3d;
  background-image: url(${creditImg});
  background-repeat: no-repeat;
  background-position: 279px center;
  background-size: 24px;
  padding-left: 48px;
  max-width: 295px;
  max-height: 58px;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "#ff2626" : "#ffffff")};;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  color: #ffffff;
  line-height: 26px;
  padding: 16px;


  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? "#ff2626" : "#6ea8ff")};
  }

  transition: border-color 0.2s ease;
`;

export const ErrorMessage = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #ff2626;
  font-weight: 600;
`

export const Button = styled.button`
  background-color: #828282;
  width: 295px;
  height: 42px;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Pretendard;
  line-height: 26px;
  letter-spacing: 2%;
`;