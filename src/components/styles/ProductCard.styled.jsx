import styled from "styled-components";

export const StyledCard = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin: 15px 0 10px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 15px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }

  &:hover {
    transform: translateY(-10px);
  }
`;
