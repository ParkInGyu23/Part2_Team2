import styled from "styled-components";

export const IdolContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

export const IdolImage = styled.img`
  width: 158px;
  height: 206px;
  border-radius: 8px;
  object-fit: cover;
`
export const IdolGroup = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 8px;
`
export const IdolTitle = styled.div`
  width: 158px;
  text-align: left;
  span {
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
  }
`

export const IdolInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #f7f7f8;
`

export const InputWrap = styled.div`
  position: relative;
  width: 295px;
  margin-bottom: -16px;
`

export const DonateInput = styled.input`
  background-color: #272f3d;
  width: 100%;
  height: 58px;
  padding: 16px 48px 16px 16px;

  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  line-height: 26px;
  border: 1px solid ${({ $error }) => ($error ? "#ff3b3b" : "#f7f7f8")};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid ${({ $error }) => ($error ? "#ff3b3b" : "#f7f7f8")};
  }
`;

export const Credit = styled.img`
  position: absolute;
  right: 16px;
  top: 29px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
`

export const ErrorSlot = styled.div`
  height: 24px;
`

export const ErrorMessage = styled.div`
  text-align: left;
  padding-top: 6px;
  font-size: 12px;
  color: #ff2626;
  font-weight: 600;
`

export const DonateButton = styled.button`
  background: ${({ disabled }) => disabled ? '#828282' : 'linear-gradient(90deg, #f86f76 0%, #fe5493 100%)'};
  width: 295px;
  height: 42px;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Pretendard;
  line-height: 26px;
  letter-spacing: 2%;
  
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};
`;

export const SuccessIcon = styled.img`
  width: 113px;
  height: 113px;
`;