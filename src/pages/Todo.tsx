import { useState } from 'react';
import { css } from '@emotion/react';

import { TodoList } from 'components/TodoList/TodoList';
import { TodoAdd } from 'components/TodoAdd/TodoAdd';

import { TodoType } from 'types/todo';

import { palette, color } from 'assets/css/foundation/variables';

export const Todo = () => {
  const initialTodos: TodoType[] = [
    {
      id: 0,
      content: 'トイレを掃除する',
      isCompleted: false,
    },
    {
      id: 1,
      content: '洗濯を干す',
      isCompleted: false,
    },
    {
      id: 2,
      content: '食材の買い出しに行く',
      isCompleted: false,
    },
  ];
  const [todos] = useState(initialTodos);

  return (
    <div css={wrapper}>
      <h1 css={title}>todos</h1>
      <div css={content}>
        <div>
          <TodoAdd />
          <div css={todoListWrapper}>
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${color.background};
`;

const content = css`
  width: 500px;
  max-width: 92%;
  height: 70vh;
  padding: 20px;
  background-color: ${palette.white};
  border-radius: 8px;
`;

const title = css`
  margin-bottom: 0.5em;
  font-weight: 700;
  font-size: 4rem;
`;

const todoListWrapper = css`
  margin-top: 1em;
`;
