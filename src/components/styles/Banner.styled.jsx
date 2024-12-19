import styled from "styled-components";

export const StyledBanner = styled.div`
  position: relative;

  .slider {
    display: flex;
    justify-content: center;
  }

  .slider img {
    width: 0 auto;
  }

  .slider img:not(img:first-child) {
    display: none;
  }

  .arrows {
    position: absolute;
    top: 50%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none;
  }

  .arrows a {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: white; /* White arrow color */
    padding: 10px; /* Add padding around the arrows */
    text-decoration: none; /* Remove link styling */
    border-radius: 50%; /* Make buttons round */
    font-size: 20px; /* Arrow font size */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; /* Add pointer cursor */
    pointer-events: all; /* Enable interaction with arrows */
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  .previous {
    position: absolute;
    left: 10px;
    background-color: #f1f1f1;
    color: black;
  }

  .next {
    position: absolute;
    right: 10px;
    background-color: #f1f1f1;
    color: black;
  }

  .round {
    border-radius: 50%;
  }
`;
