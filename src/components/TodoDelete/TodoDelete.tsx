import { VFC } from 'react';
import { css } from '@emotion/react';

import { TodoType } from 'types/todo';

import deleteImage from 'assets/images/cross.svg';

import { color } from 'assets/css/foundation/variables';

type Props = {
  todo: TodoType;
  todoIndex: number;
  deleteTodo: (index: number) => void;
};

export const TodoDelete: VFC<Props> = (props) => {
  const { todo, todoIndex, deleteTodo } = props;

  return (
    <button
      type="button"
      aria-label={`${todo.content}を削除する`}
      css={deleteButton}
      onClick={() => deleteTodo(todoIndex)}>
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
