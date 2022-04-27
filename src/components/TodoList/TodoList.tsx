import { VFC, useRef, useState, useEffect } from 'react';
import { css } from '@emotion/react';

import deleteImage from 'assets/images/cross.svg';

import { usePrevious } from 'hooks/usePrevious';

import { TodoType } from 'types/todo';

import { palette, color, size } from 'assets/css/foundation/variables';

type Props = {
  todos: TodoType[];
};

export const TodoList: VFC<Props> = (props) => {
  const { todos } = props;

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
  max-height: calc(${size.contentHeight} - 100px);
  list-style-type: none;
  overflow-y: auto;
`;

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
