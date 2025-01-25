import { styled } from "styled-components";

export const StyledModal = styled.dialog`
  position: fixed;
  top: 40px;
  background: ${({ theme }) => theme.colors.header};
  width: 75vw;
  margin: auto;
  display: block;
  animation: expand 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 8px;
  padding: 32px;
  z-index: 9999;

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    appearance: none;
    background: rgba(255, 255, 255, 0.05);
    padding: 0;
    color: var(--charcoal);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
