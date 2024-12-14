import styled from "styled-components";

export const StyledBanner = styled.div`
  .slider img:not(img:first-child) {
    display: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  .previous {
    background-color: #f1f1f1;
    color: black;
  }

  .next {
    background-color: #f1f1f1;
    color: black;
  }

  .round {
    border-radius: 50%;
  }
`;
