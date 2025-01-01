import styled from "styled-components";

export const StyledAccordian = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    background-color: var(--cln-dark);
    color: var(--clr-text);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    margin-bottom: 5px;
  }

  .content {
    padding: 0 18px;
    color: var(--clr-text);
    background-color: var(--cln-dark);
    overflow: hidden;
  }
`;
