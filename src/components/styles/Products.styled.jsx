import styled from "styled-components";

export const StyledProducts = styled.div`
  margin-top: 4rem;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;

    border-radius: 8px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

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

  /* xs */
  /* @media (min-width: 475px) {} */

  /* sm */
  /* @media (min-width: 640px) {} */

  /* md */
  /* @media (min-width: 768px) {} */

  /* lg */
  /* @media (min-width: 1024px) {} */

  /* xl */
  /* @media (min-width: 1280px) {} */

  /* 2xl */
  /* @media (min-width: 1536px) {} */
`;
