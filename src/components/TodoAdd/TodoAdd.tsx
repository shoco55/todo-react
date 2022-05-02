import { VFC, useState, ChangeEvent, FormEvent } from 'react';
import { css } from '@emotion/react';

import { palette, color } from 'assets/css/foundation/variables';

type Props = {
  addTodo: (text: string) => void;
};

export const TodoAdd: VFC<Props> = (props) => {
  const { addTodo } = props;

  const [todoText, setTodoText] = useState('');

  const updateTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const isAddButtonDisabled = () => {
    return todoText.trim().length < 1;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoText.trim() === '') return;

    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form css={container} onSubmit={handleSubmit}>
      <input
        type="text"
        title="タスクを入力"
        css={addInput}
        value={todoText}
        onChange={updateTodoText}
      />
      <button type="submit" css={addButton} disabled={isAddButtonDisabled()}>
        タスクを追加
      </button>
    </form>
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

  &:not(:disabled):hover {
    background-color: ${color.primaryDark};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
