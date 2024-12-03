import styled from "styled-components";

export const StyledProducts = styled.div`
  .list .item {
    transition: 0.5s;
    filter: brightness(0.1);
  }

  .list .item:hover {
    filter: brightness(1);
  }
`;
