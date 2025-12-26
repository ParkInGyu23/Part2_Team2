import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalBox = styled.div`
  background: #181D26;
  width: ${({ $width }) => $width || '350px'};
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseIconImg = styled.img`
  &:hover {
    filter: ${({ $hover }) => ($hover ? 'brightness(0) invert(1)' : 'none')};
    transform: scale(1.1);
  }
`