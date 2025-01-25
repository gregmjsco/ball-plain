import { StyledModal } from "./styles/Modal.styled";

export default function Modal({ children, onClose }) {
  return (
    <StyledModal>
      <button onClick={onClose}>X</button>
      {children}
    </StyledModal>
  );
}
