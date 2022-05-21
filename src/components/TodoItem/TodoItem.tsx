import { VFC } from 'react';
import { css } from '@emotion/react';

import { TodoDelete } from 'components/TodoDelete/TodoDelete';

import { TodoType } from 'types/todo';

import { palette, color } from 'assets/css/foundation/variables';

type Props = {
  todo: TodoType;
  updateTodoIsCompleted: (todoData: TodoType) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
};

export const TodoItem: VFC<Props> = (props) => {
  const { todo, updateTodoIsCompleted, deleteTodo } = props;

  const onChangeInput = (todoData: TodoType) => {
    void updateTodoIsCompleted(todoData);
  };

  return (
    <li css={listItem}>
      <div css={itemCard}>
        <label css={checkbox}>
          <input
            type="checkbox"
            aria-label={`${todo.content}のチェックボックス`}
            css={checkboxSubstance}
            checked={todo.isCompleted}
            onChange={() => onChangeInput(todo)}
          />
          <span css={checkboxIcon} />
        </label>
        <p css={todo.isCompleted ? checkedCheckboxText : checkboxText}>
          {todo.content}
        </p>

        <TodoDelete todo={todo} deleteTodo={deleteTodo} />
      </div>
    </li>
  );
};

const listItem = css`
  padding: 1em 1em 1em 0.4em;
  border-bottom: 1px solid ${color.hr};
`;

const itemCard = css`
  display: flex;
  align-items: center;
  width: 100%;
`;

const checkbox = css`
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.2em;
  font-size: 1.6rem;
  text-align: left;
  cursor: pointer;
`;

const checkboxSubstance = css`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  border-radius: 50%;
  appearance: none;
  z-index: 2;
  cursor: pointer;

  &:focus {
    opacity: 1;
  }

  &:hover + span {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 7%;
      left: 50%;
      width: 36%;
      height: 68%;
      border-bottom: 0.1em solid ${palette.gray};
      border-right: 0.1em solid ${palette.gray};
      transform: translate(-50%) rotate(45deg);
    }
  }

  &:checked + span {
    background-color: ${color.primary};
    border: 1px solid ${color.primary};
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 7%;
      left: 50%;
      width: 36%;
      height: 68%;
      border-bottom: 0.1em solid ${palette.white};
      border-right: 0.1em solid ${palette.white};
      transform: translate(-50%) rotate(45deg);
    }
  }
`;

const checkboxIcon = css`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 0.7em;
  border-radius: 50%;
  border: 1px solid ${palette.gray};
  background: ${palette.white};
`;

const checkboxText = css`
  font-size: 1.6rem;
`;

const checkedCheckboxText = css`
  ${checkboxText};

  text-decoration: line-through;
  opacity: 0.6;
`;
