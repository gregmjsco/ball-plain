import { StyledModal } from "./styles/Modal.styled";

export default function Modal({ children, onClose }) {
  return (
    <StyledModal>
      <button className="modal-close-btn" onClick={onClose}>
        X
      </button>
      {children}
    </StyledModal>
  );
}
