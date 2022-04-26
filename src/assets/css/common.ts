import { css } from '@emotion/react';

import { resetCss } from './foundation/reset';
import { baseCss } from './foundation/base';

export const CommonCss = css`
  ${resetCss}
  ${baseCss}
`;
