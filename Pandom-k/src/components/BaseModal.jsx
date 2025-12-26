import { createPortal } from "react-dom";
import { CloseButton, CloseIconImg, ModalBox, ModalContent, Overlay } from "./BaseModal.styled.js";
import { useEffect } from "react";
import CloseIcon from '../assets/icons/Close.svg'

function BaseModal({ isOpen, onClose, children, $width }) {
  useEffect(() => {
    if (isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  },[isOpen]);

  if (!isOpen) return null;
  
    return createPortal(
        <Overlay onClick={onClose}>
            <ModalBox $width={$width} onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={onClose} aria-label="닫기">
                  <CloseIconImg src={CloseIcon} alt="close" $hover />
              </CloseButton>
              <ModalContent>
                {children}
              </ModalContent>
            </ModalBox>
        </Overlay>,
        document.getElementById("root")
    );
}

export default BaseModal;