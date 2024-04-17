import { css } from "@emotion/react";
export const globals = css`
  :root {
    --header-height: 70px;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--surface-ground);
    font-family: "Inter";
    max-width: 100vw;
    position: relative;
    &::before {
      z-index: -1;
      content: "";
      position: fixed;
      height: calc(100vh - var(--header-height));
      bottom: 0;
      width: 100vw;
      background: url("https://cdn.pixabay.com/photo/2017/09/03/17/26/woman-2711279_1280.jpg")
        no-repeat center;
      background-size: cover;
      background-position: left top;
    }
  }
  * {
    box-sizing: border-box;
  }
  .page-wrapper {
    width: 100%;
    padding-top: 12.5vh;
  }
`;
