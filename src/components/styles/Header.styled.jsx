import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};

  .header__logo {
    width: ${({ theme }) => theme.sizes.sevenxl};
    height: auto;
  }

  .header__bars {
    width: ${({ theme }) => theme.sizes.twoxl};
    height: ${({ theme }) => theme.sizes.twoxl};
  }
`;
