import { VFC } from 'react';
import { css } from '@emotion/react';

import deleteImage from 'assets/images/cross.svg';

import { color } from 'assets/css/foundation/variables';

type Props = {
  itemIndex: number;
  deleteTodo: (index: number) => void;
};

export const TodoDelete: VFC<Props> = (props) => {
  const { itemIndex, deleteTodo } = props;

  return (
    <button
      type="button"
      css={deleteButton}
      onClick={() => deleteTodo(itemIndex)}>
      <img src={deleteImage} alt="削除アイコン" css={deleteIcon} />
    </button>
  );
};

const deleteButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: ${color.iconHover};
    border-radius: 4px;
  }
`;

const deleteIcon = css`
  width: 70%;
  height: auto;
`;
