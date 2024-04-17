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

export const listingForm = css`
  ${middleFlex}
  flex-direction: column;
  width: 550px;
  margin-bottom: 5vh;
  backdrop-filter: blur(5px);
  border: 1px solid #ddd; /* Light border for separation */
  border-radius: 10px; /* Rounded corners */
  padding: 2rem; /* Add some padding for form elements */

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
      display: block; /* Clear any inline styles */
      border: 2px solid #ccc; /* Adjust border color for better contrast */
      background-color: #f5f5f5; /* Light background for input fields */
      padding: 100px;
      border-radius: 100px;
      gap: 30%;
      width: 300px;
      font-size: 2.5rem;

      &:focus {
        outline: none; /* Remove default outline */
        border-color: black; /* Highlight on focus */
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

  @media screen and (width < 600px) {
    width: 90%;
  }
`;

export const submitBtn = css`
  padding: 10px 25px;
  border-radius: 500px;
  border: none;
  background-color: #388e3c; /* Green submit button */
  color: white; /* White text for contrast */
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
