import { css } from '@emotion/react';

export const baseCss = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    color: #333;
    font-size: 1.6rem;
    letter-spacing: 0.05em;
    line-height: 1.4;
    word-wrap: break-word;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    appearance: none;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  a {
    color: inherit;
  }
`;
