import styled from "styled-components";

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #f7f7f8;
  text-align: left;
`
export const IdolListContent = styled.div`
  width: 100%;
  height: 514px;
  overflow-y: auto;
  padding-right: 8px;
`

export const IdolItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  width: 100%;
`
export const RankAndImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const IdolImgWrap = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #f96d69;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IdolImgProfile = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`
export const SelectedOverlay = styled.div`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, rgba(249, 110, 104, 0.5) 0%, rgba(254,87,143,0.5) 100%);
  border-radius: 50%;
  z-index: 1;
  
`
export const CheckIcon = styled.img`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  z-index: 2;
`

export const RankNumber = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #f96d69;
  opacity: 0.6;
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;

`

export const IdolInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
`
export const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.87);
`

export const VoteAmount = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
`

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
`

export const VoteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${({ disabled }) => disabled ? '#828282' : 'linear-gradient(90deg, #f86f76 0%, #fe5493 100%)'};
  width: 100%;
  height: 42px;
  border-radius: 3px;
  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};
`
export const GuideLine = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`
export const Highlight = styled.span`
  color: #F96D69;
`

export const ShortageImg = styled.img`
  width: 113px;
  height: 113px;
`

