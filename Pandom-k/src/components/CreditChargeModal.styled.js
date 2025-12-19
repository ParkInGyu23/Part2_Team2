import styled from 'styled-components';
import creditImg from '../assets/icons/credit.svg';

export const ChargeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, #f86f76 0%, #fe5493 100%);
  width: 295px;
  height: 42px;
  border-radius: 3px;

  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
`;

export const SelectButton = styled.button`
  background-repeat: no-repeat;
  background-size: 16px;
  background-color: #02000e;
  background-position: 16px center;

  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid #f7f7f8;

  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
`;

export const ChargeInput = styled.input`
  background-repeat: no-repeat;
  background-size: 16px;
  background-color: #02000e;
  background-position: 16px center;

  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid #f7f7f8;

  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
`;

export const Credit = styled.img`
  background-image: url(${creditImg});
  width: 13px;
  height: 13px;
`