import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const listingWrapper = css`
  ${middleFlex}
  flex-direction: column;
  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }
`;

export const radioBtnsContainer = css`
  display: flex;
  width: 100%;
  gap: 15%;
  label {
    font-size: 1.25rem;
    margin-left: 5px;
    text-transform: capitalize;
  }
  padding-bottom: 10px;
`;

export const listingForm = css`
  ${middleFlex}
  flex-direction: column;
  width: 550px;
  margin-bottom: 5vh;
  backdrop-filter: blur(5px);
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;

  * {
    transition: all 0.3s ease;
  }

  & > div {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between; /* Align labels and inputs horizontally */
    align-items: center;
    flex-direction: column;

    & > input {
      display: block;
      border: 1px solid #ccc;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 5px;
      width: 100%;
      font-size: 1.2rem;
      color: black;
      &:focus {
        outline: none;
        border-color: black;
      }
    }

    & > span {
      display: block; /* Clear any inline styles */
      width: 100%;
      padding: 50px;
      margin-bottom: 0.5rem; /* Reduce spacing between label and input */
      gap: 20%;
      font-size: 1rem; /* Slightly smaller label font */
      color: #666; /* Lighter label color */
    }

    & > label {
      margin-bottom: 1.5rem; /* Reduce spacing between label and input */
      font-size: 1.2rem; /* Slightly smaller label font */
      color: white; /* Lighter label color */
    }
  }

  & > h2 {
    color: white;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const radioContainer = css`
  ${middleFlex}
  gap: 2rem;
`;

export const submitBtn = css`
  padding: 10px 25px;
  border-radius: 500px;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 2vh 0;

  &:hover {
    background-color: #2e602e; /* Slightly darker green on hover */
  }
`;

export const header = css`
  margin: 10px;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

