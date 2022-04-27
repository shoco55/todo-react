import { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

import { TodoList } from 'components/TodoList/TodoList';
import { TodoAdd } from 'components/TodoAdd/TodoAdd';

import { TodoType } from 'types/todo';

import { palette, color, size } from 'assets/css/foundation/variables';

export const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: uuidv4(),
      content: text,
      isCompleted: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div css={wrapper}>
      <h1 css={title}>todos</h1>
      <div css={content}>
        <div>
          <TodoAdd addTodo={addTodo} />
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
  height: ${size.contentHeight};
  padding: 20px;
  background-color: ${palette.white};
  border-radius: 8px;
`;

const title = css`
  margin-bottom: 0.5em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 4rem;
`;

const todoListWrapper = css`
  margin-top: 1em;
`;
