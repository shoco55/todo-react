import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import camelcaseKeys from 'camelcase-keys';

import { RepositoryFactory } from 'repositories/RepositoryFactory';

import { TodoList } from 'components/TodoList/TodoList';
import { TodoAdd } from 'components/TodoAdd/TodoAdd';
import { LoaderIcon } from 'components/LoaderIcon/LoaderIcon';

import { useLoader } from 'hooks/useLoader';
import { useLoaderButton } from 'hooks/useLoaderButton';

import { ApiResponse } from 'types/apiResponse';
import { TodoType } from 'types/todo';

import { palette, color, size } from 'assets/css/foundation/variables';

const todosRepository = RepositoryFactory.get('todos');

export const Todo = () => {
  const { isLoading, showLoader, hideLoader } = useLoader();
  const { isButtonLoading, showLoaderButton, hideLoaderButton } =
    useLoaderButton();

  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async (): Promise<void> => {
    try {
      showLoader();

      const res = await todosRepository.getTodos();

      if (res.status === 200) {
        const r: ApiResponse<TodoType[]> = res.data;
        const todosData = camelcaseKeys(r.data);
        setTodos(todosData);
      } else {
        throw new Error();
      }
    } catch (error) {
      // エラー処理
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    void getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = async (content: string): Promise<void> => {
    try {
      showLoaderButton();

      const dataObj = {
        content,
        isCompleted: false,
      };

      const res = await todosRepository.postTodo(dataObj);

      if (res.status === 200) {
        const r: ApiResponse<Pick<TodoType, 'id'>> = res.data;
        const { id } = camelcaseKeys(r.data);
        const newTodo = { ...dataObj, id };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
      } else {
        throw new Error();
      }
    } catch (error) {
      // エラー処理
    } finally {
      hideLoaderButton();
    }
  };

  const updateTodoIsCompleted = async (todoData: TodoType): Promise<void> => {
    try {
      const { id, content, isCompleted } = todoData;

      const dataObj = {
        content,
        isCompleted: !isCompleted,
      };

      const res = await todosRepository.updateTodo(id, dataObj);

      if (res.status === 200) {
        const newTodo = { id, ...dataObj };
        const newTodos = [...todos];
        const updateTodoIndex = newTodos.findIndex((item) => item.id === id);
        newTodos.splice(updateTodoIndex, 1, newTodo);
        setTodos(newTodos);
      } else {
        throw new Error();
      }
    } catch (error) {
      // エラー処理
    }
  };

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      showLoader();

      const res = await todosRepository.deleteTodo(id);

      if (res.status === 200) {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      } else {
        throw new Error();
      }
    } catch (error) {
      // エラー処理
    } finally {
      hideLoader();
    }
  };

  return (
    <div css={wrapper}>
      <h1 css={title}>todos</h1>
      <div css={content}>
        <div>
          <TodoAdd addTodo={addTodo} isButtonLoading={isButtonLoading} />
          <div css={todoListWrapper}>
            {isLoading ? (
              <LoaderIcon />
            ) : (
              <TodoList
                todos={todos}
                updateTodoIsCompleted={updateTodoIsCompleted}
                deleteTodo={deleteTodo}
              />
            )}
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
