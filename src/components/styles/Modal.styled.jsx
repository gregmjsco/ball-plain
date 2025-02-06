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

  .modal-close-btn {
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

  .modal-purchase-btn {
    margin-top: 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  /* xs */
  /* @media (min-width: 475px) {
    max-width: 475px;
  } */

  /* sm */
  /* @media (min-width: 640px) {
    max-width: 640px;
  } */

  /* md
  @media (min-width: 768px) {
    max-width: 768px;
  } */

  /* lg
  @media (min-width: 1024px) {
    max-width: 1024px;
  } */

  /* xl */
  /* @media (min-width: 1280px) {
    max-width: 1280px;
  } */

  /* 2xl */
  /* @media (min-width: 1536px) {
    max-width: 1536px;
  } */
`;
