import { VFC, useState, ChangeEvent, FormEvent } from 'react';
import { css } from '@emotion/react';

import { palette, color } from 'assets/css/foundation/variables';

type Props = {
  addTodo: (content: string) => Promise<void>;
  isButtonLoading: boolean;
};

export const TodoAdd: VFC<Props> = (props) => {
  const { addTodo, isButtonLoading } = props;

  const [todoContent, setTodoContent] = useState('');

  const updateTodoContent = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };

  const isAddButtonDisabled = () => {
    return todoContent.trim().length < 1;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoContent.trim() === '') return;

    addTodo(todoContent)
      .then(() => setTodoContent(''))
      .catch(() => {
        // エラー処理
      });
  };

  return (
    <form css={container} onSubmit={handleSubmit}>
      <input
        type="text"
        title="タスクを入力"
        css={addInput}
        value={todoContent}
        onChange={updateTodoContent}
      />
      <button type="submit" css={addButton} disabled={isAddButtonDisabled()}>
        {isButtonLoading ? '送信中...' : 'タスクを追加'}
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 120px;
  height: 44px;
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
