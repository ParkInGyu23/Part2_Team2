import styled from 'styled-components';

export const textContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChargeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${({ disabled }) => disabled ? '#828282' : 'linear-gradient(90deg, #f86f76 0%, #fe5493 100%)'};
  width: 295px;
  height: 42px;
  border-radius: 3px;

  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background-color: #02000e;
  width: 295px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => $active ? '#F96D69' : '#f7f7f8'};

  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RadioCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? '#F96D69' : '#f7f7f8')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &::after {
    content: '';
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    width: 8px;
    height: 8px;
    background-color: #f96d69;
    border-radius: 50%;
  }
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
  padding: 0 20px;

  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: #ffffff;

  &:focus {
    outline: none;
    border: 1px solid #f96d69;
  }
`;

export const Credit = styled.img`
  width: ${({ $size }) => ($size ? `${$size}px` : '16px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '16px')};
  filter: ${({ $white }) => ($white ? 'brightness(0) invert(1)' : 'none')};
`;

export const SuccessIcon = styled.img`
  width: 113px;
  height: 113px;
`;