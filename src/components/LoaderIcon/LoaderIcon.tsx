import { VFC } from 'react';
import { css, keyframes } from '@emotion/react';

export const LoaderIcon: VFC = () => {
  return <span css={loader}>Loading...</span>;
};

const loading = keyframes`
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #006ed3, 1.8em -1.8em 0 0em rgba(0,110,211, 0.2), 2.5em 0em 0 0em rgba(0,110,211, 0.2), 1.75em 1.75em 0 0em rgba(0,110,211, 0.2), 0em 2.5em 0 0em rgba(0,110,211, 0.2), -1.8em 1.8em 0 0em rgba(0,110,211, 0.2), -2.6em 0em 0 0em rgba(0,110,211, 0.5), -1.8em -1.8em 0 0em rgba(0,110,211, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.7), 1.8em -1.8em 0 0em #006ed3, 2.5em 0em 0 0em rgba(0,110,211, 0.2), 1.75em 1.75em 0 0em rgba(0,110,211, 0.2), 0em 2.5em 0 0em rgba(0,110,211, 0.2), -1.8em 1.8em 0 0em rgba(0,110,211, 0.2), -2.6em 0em 0 0em rgba(0,110,211, 0.2), -1.8em -1.8em 0 0em rgba(0,110,211, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.5), 1.8em -1.8em 0 0em rgba(0,110,211, 0.7), 2.5em 0em 0 0em #006ed3, 1.75em 1.75em 0 0em rgba(0,110,211, 0.2), 0em 2.5em 0 0em rgba(0,110,211, 0.2), -1.8em 1.8em 0 0em rgba(0,110,211, 0.2), -2.6em 0em 0 0em rgba(0,110,211, 0.2), -1.8em -1.8em 0 0em rgba(0,110,211, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.2), 1.8em -1.8em 0 0em rgba(0,110,211, 0.5), 2.5em 0em 0 0em rgba(0,110,211, 0.7), 1.75em 1.75em 0 0em #006ed3, 0em 2.5em 0 0em rgba(0,110,211, 0.2), -1.8em 1.8em 0 0em rgba(0,110,211, 0.2), -2.6em 0em 0 0em rgba(0,110,211, 0.2), -1.8em -1.8em 0 0em rgba(0,110,211, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.2), 1.8em -1.8em 0 0em rgba(0,110,211, 0.2), 2.5em 0em 0 0em rgba(0,110,211, 0.5), 1.75em 1.75em 0 0em rgba(0,110,211, 0.7), 0em 2.5em 0 0em #006ed3, -1.8em 1.8em 0 0em rgba(0,110,211, 0.2), -2.6em 0em 0 0em rgba(0,110,211, 0.2), -1.8em -1.8em 0 0em rgba(0,110,211, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.2), 1.8em -1.8em 0 0em rgba(0,110,211, 0.2), 2.5em 0em 0 0em rgba(0,110,211, 0.2), 1.75em 1.75em 0 0em rgba(0,110,211, 0.5), 0em 2.5em 0 0em rgba(0,110,211, 0.7), -1.8em 1.8em 0 0em #006ed3, -2.6em 0em 0 0em rgba(0,110,211, 0.2), -1.8em -1.8em 0 0em rgba(0,110,211, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.2), 1.8em -1.8em 0 0em rgba(0,110,211, 0.2), 2.5em 0em 0 0em rgba(0,110,211, 0.2), 1.75em 1.75em 0 0em rgba(0,110,211, 0.2), 0em 2.5em 0 0em rgba(0,110,211, 0.5), -1.8em 1.8em 0 0em rgba(0,110,211, 0.7), -2.6em 0em 0 0em #006ed3, -1.8em -1.8em 0 0em rgba(0,110,211, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,110,211, 0.2), 1.8em -1.8em 0 0em rgba(0,110,211, 0.2), 2.5em 0em 0 0em rgba(0,110,211, 0.2), 1.75em 1.75em 0 0em rgba(0,110,211, 0.2), 0em 2.5em 0 0em rgba(0,110,211, 0.2), -1.8em 1.8em 0 0em rgba(0,110,211, 0.5), -2.6em 0em 0 0em rgba(0,110,211, 0.7), -1.8em -1.8em 0 0em #006ed3;
  }
`;

const loader = css`
  display: block;
  position: relative;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  font-size: 18px;
  text-indent: -9999em;
  transform: translateZ(0);
  animation: ${loading} 1.1s infinite ease;
  z-index: 1;
`;
