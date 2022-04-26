import { VFC } from 'react';
import { css } from '@emotion/react';

import deleteImage from 'assets/images/cross.svg';

import { TodoType } from 'types/todo';

import { palette, color } from 'assets/css/foundation/variables';

type Props = {
  todos: TodoType[];
};

export const TodoList: VFC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul css={list}>
      {todos.map((todo) => {
        const { id, content, isCompleted } = todo;
        return (
          <li key={id} css={listItem}>
            <div css={itemCard}>
              <label css={checkbox}>
                <input
                  type="checkbox"
                  aria-label={`${content}のチェックボックス`}
                  css={checkboxSubstance}
                  checked={isCompleted}
                />
                <span css={checkboxIcon} />
              </label>
              <p css={checkboxText}>{content}</p>

              <button type="button" css={deleteButton}>
                <img src={deleteImage} alt="削除アイコン" css={deleteIcon} />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const list = css`
  list-style-type: none;
  overflow-y: auto;
`;

const listItem = css`
  padding: 1em 0.4em;

  & + & {
    border-top: 1px solid ${color.hr};
  }
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
  input:checked ~ & {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

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
