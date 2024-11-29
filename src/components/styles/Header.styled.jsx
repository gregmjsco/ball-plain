import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  .header__logo {
    width: ${({ theme }) => theme.sizes.sevenxl};
    height: ${({ theme }) => theme.sizes.sevenxl};
    object-fit: cover;
  }

  .header__bars {
    color: var(--brand-dark);
    width: ${({ theme }) => theme.sizes.twoxl};
    height: ${({ theme }) => theme.sizes.twoxl};
  }

  /* xs */
  /* @media (min-width: 475px) {} */

  /* sm */
  /* @media (min-width: 640px) {} */

  /* md */
  @media (min-width: 768px) {
    .header__bars {
      display: none;
    }
  }

  /* lg */
  /* @media (min-width: 1024px) {} */

  /* xl */
  /* @media (min-width: 1280px) {} */

  /* 2xl */
  /* @media (min-width: 1536px) {} */
`;
