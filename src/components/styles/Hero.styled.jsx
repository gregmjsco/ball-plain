import styled from "styled-components";

export const StyledHero = styled.section`
  text-align: center;
  margin-top: 2rem;

  .hero > * + * {
    margin-top: 1rem;
  }

  .hero__img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
    margin-inline: auto;
  }

  .hero__title {
    font-size: ${({ theme }) => theme.sizes.threexl};
    font-weight: 900;
    line-height: 1;
  }
`;
