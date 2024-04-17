import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const homeWrapper = css`
  ${middleFlex}
  flex-direction: column;
  height: 100vh;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  * {
    transition: all 0.3s ease;
  }

  .main-heading {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const linkDiv = css`
  ${middleFlex}
  gap: 1.5rem;
  z-index: 1;

  a {
    button {
      font-weight: 600;
      border-radius: 25px;
      padding: 10px 20px;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(206, 204, 204, 0.46);
      }
    }
  }
`;

export const background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/03/17/26/woman-2711279_1280.jpg");
  background-size: cover;
  background-position: left top;
  filter: blur(8px);
  z-index: 0;
`;
export const shop = css`
  ${middleFlex}
  flex-direction: column;
  height: 100vh;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  .main-heading {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;
export const linkContainer = css`
  ${middleFlex}
  display: flex;
  gap: 1.5rem;
  z-index: 1;

  a {
    text-decoration: none;
    font-weight: 600;
    border-radius: 25px;
    padding: 10px 20px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: rgba(255, 255, 255, 100%);
    background-color: rgba(0, 0, 0, 0.3);
    width: 300px;
    height: 170px;
    text-align: center;
    line-height: 170px;
    font-size: 3rem;
    position: relative;
    overflow: hidden;
    &::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      opacity: 70%;
      background-image: url("https://img.freepik.com/premium-photo/dog-cat-are-sitting-together-black-background_888396-3449.jpg?w=740");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      inset: 0;
      z-index: -1;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
  }
`;
