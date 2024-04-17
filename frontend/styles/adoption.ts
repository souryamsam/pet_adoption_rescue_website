import { middleFlex } from "@/styles/common";
import { css } from "@emotion/react";

export const adoptionGrid = css`
  --col-num: 2;
  display: grid;
  padding: 0 5%;
  grid-template-columns: repeat(var(--col-num), 1fr);
  place-items: center;
  gap: 50px;
  width: 100%;
  margin-bottom: 10vh;
  position: relative;
  @media screen and (width < 1200px) {
    --col-num: 1;
  }
`;

export const bgImgContainer = css`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  opacity: 0.3;
  filter: sepia(1);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const adoptionWrapper = css`
  ${middleFlex}
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  .adoption-header {
    font-size: 2rem;
  }
  & > span {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }
  & > input {
    display: block;
    width: 35%;
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: balck;
    &:focus {
      border-color: black;
    }
  }
  & > select {
    margin-top: 1rem;
    width: 15%;
    font-size: 1rem;
  }
  & > h2 {
    color: white;
  }
`;

export const adoptionCard = css`
  margin-top: 2rem;
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: black;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  position: relative;
  column-gap: 25px;
  align-items: center;
  overflow: hidden;
  a {
    text-decoration: none;
    color: white;
  }
  @media screen and (width < 600px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

export const cardImgContainer = css`
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  width: 40%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (width < 600px) {
    height: 200px;
    width: 100%;
  }
`;

export const adoptionCardText = css`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 60%;
  span {
    text-transform: capitalize;
    color: white;
  }
  .card-info-pair {
    .card-label {
      font-weight: 600;
      letter-spacing: 1px;
      color: orange;
    }
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
