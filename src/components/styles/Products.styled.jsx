import styled from "styled-components";

export const StyledProducts = styled.div`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 80vh;

    transform-style: preserve-3d;
    transform: perspective(10000px);
  }

  .list .item {
    transition: 0.5s;
    filter: brightness(0.8);
  }

  .list .item:hover {
    filter: brightness(1);
    transform: translateZ(600px);
  }

  .list .item:hover + * {
    filter: brightness(0.9);
    transform: translateZ(150px) rotateY(40deg);
  }

  .list .item:has(+ *:hover) {
    filter: brightness(0.9);
    transform: translateZ(150px) rotateY(-40deg);
  }
`;
