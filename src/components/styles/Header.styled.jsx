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

  .header__cart-btn {
    background-color: ${({ theme }) => theme.colors.brand};
    color: white;
  }

  .mobile-header__cart-btn {
    /* position: fixed;
    top: 20px;
    right: 20px; */
    background-color: var(--brand-light);
    color: white;
    font-size: ${({ theme }) => theme.sizes.base};
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
  }

  &.mobile-menu-open {
    .mobile-header__cart-btn {
      display: none;
    }
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

    .mobile-header__cart-btn {
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
      background-color: var(--brand-dark);
      color: white;
      font-size: ${({ theme }) => theme.sizes.base};
      text-decoration: none;
      font-weight: 700;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      margin-left: 1rem;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--brand-dark);
  z-index: 9;

  display: none;
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

export const StyledDialog = styled.dialog`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border: none;
  display: none;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: auto;
  margin: auto;
  z-index: 1000;

  &[open] {
    display: block;
  }
`;

export const StyledDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

export const StyledCloseBtn = styled.button`
  background-color: #f00;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  font-size: 1rem;
`;

export const CartItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const CartItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;
