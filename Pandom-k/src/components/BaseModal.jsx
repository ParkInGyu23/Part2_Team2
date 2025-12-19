import { createPortal } from "react-dom";
import { ModalBox, ModalContent, Overlay } from "./BaseModal.styled.js";
import { useEffect } from "react";

function BaseModal({ isOpen, onClose, children, }) {
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
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                {children}
              </ModalContent>
            </ModalBox>
        </Overlay>,
        document.getElementById("root")
    );
}

export default BaseModal;