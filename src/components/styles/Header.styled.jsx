import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  border-bottom: 1px solid var(--brand-dark);

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

  .header__menu {
    display: none;
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

    .header__menu {
      display: flex;
      align-items: center;
    }

    .header__social {
      text-decoration: none;
      font-size: ${({ theme }) => theme.sizes.twoxl};
      color: var(--brand-dark);
      line-height: 0;
      padding: 0.5rem;
    }

    .header__separator {
      border: 1px solid var(--brand-dark);
      padding-top: 1.5rem;
    }

    .header__cart-btn {
      color: var(--brand-dark);
      font-size: ${({ theme }) => theme.sizes.base};
      text-decoration: none;
      font-weight: 700;
    }
  }

  /* lg */
  /* @media (min-width: 1024px) {} */

  /* xl */
  /* @media (min-width: 1280px) {} */

  /* 2xl */
  /* @media (min-width: 1536px) {} */
`;

export const StyledMobileHeader = styled.div`
  border: 5px solid red;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--brand-dark);
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .mobile-nav__logo {
    width: ${({ theme }) => theme.sizes.sevenxl};
    height: ${({ theme }) => theme.sizes.sevenxl};
    object-fit: cover;
  }

  .mobile-nav__social-container {
    display: flex;
    gap: 1rem;
  }

  .mobile-nav__separator {
    border: 1px solid white;
    padding-right: 1.5rem;
  }
`;
