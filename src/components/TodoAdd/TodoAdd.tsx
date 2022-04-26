import { VFC } from 'react';
import { css } from '@emotion/react';

import { palette, color } from 'assets/css/foundation/variables';

export const TodoAdd: VFC = () => {
  return (
    <div css={container}>
      <input type="text" title="タスク追加用のフォーム" css={addInput} />
      <button type="button" css={addButton}>
        タスクを追加
      </button>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
`;

const addInput = css`
  width: 100%;
  height: 44px;
  padding-left: 0.8em;
  border: 1px solid ${color.formParts};
  border-right-color: transparent;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 1.6rem;
`;

const addButton = css`
  flex-shrink: 0;
  height: 44px;
  padding: 0 1em;
  background-color: ${color.primary};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: ${palette.white};
  font-weight: 700;
  font-size: 1.6rem;

  &:hover {
    background-color: ${color.primaryDark};
  }
`;
