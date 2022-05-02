import { VFC, useRef, useState, useEffect } from 'react';
import { css } from '@emotion/react';

import { TodoItem } from 'components/TodoItem/TodoItem';

import { usePrevious } from 'hooks/usePrevious';

import { TodoType } from 'types/todo';

import { size } from 'assets/css/foundation/variables';

type Props = {
  todos: TodoType[];
  updateTodoIsCompleted: (index: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList: VFC<Props> = (props) => {
  const { todos, updateTodoIsCompleted, deleteTodo } = props;

  const listRef = useRef(null);
  const [listHeight, setListHeight] = useState(0);
  const prevListHeight = usePrevious(listHeight);

  const scrollToBottom = () => {
    if (listRef?.current == null) return;

    const listElement: HTMLElement = listRef.current;
    listElement.scrollTo({
      top: listHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (listRef?.current == null) return;
    const listElement: HTMLElement = listRef.current;
    setListHeight(listElement.scrollHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  useEffect(() => {
    if (prevListHeight && prevListHeight < listHeight) {
      scrollToBottom();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listHeight]);

  return (
    <ul css={list} ref={listRef}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoIndex={index}
            updateTodoIsCompleted={updateTodoIsCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

const list = css`
  max-height: calc(${size.contentHeight} - 100px);
  list-style-type: none;
  overflow-y: auto;
`;
