import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 0.5rem;

  border: 1px solid red;

  /* xs */
  @media (min-width: 475px) {
    max-width: 475px;
  }

  /* sm */
  @media (min-width: 640px) {
    max-width: 640px;
  }

  /* md */
  @media (min-width: 768px) {
    max-width: 768px;
  }

  /* lg */
  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  /* xl */
  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  /* 2xl */
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
