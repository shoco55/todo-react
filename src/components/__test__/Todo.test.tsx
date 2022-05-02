import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Todo } from 'pages/Todo';

afterAll(() => {
  cleanup();
});

describe('ListElementの初期状態', () => {
  it('リストは空である', () => {
    render(<Todo />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeEmptyDOMElement();
  });
});

describe('TodoAddのフォームに値を入力して、追加ボタンまたはEnterキーを押下した時', () => {
  it('入力値がTodoリストに追加され、フォームの値が空になる＆追加ボタンが、無効化される', () => {
    render(<Todo />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    const value = 'ご飯を炊く';
    userEvent.type(inputElement, value);

    const addButtonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    userEvent.click(addButtonElement);

    const listElement = screen.getAllByRole('listitem');
    expect(listElement).toHaveLength(1);

    userEvent.click(addButtonElement);
    expect(inputElement).toHaveValue('');
    expect(addButtonElement).toBeDisabled();
  });
});

describe('TodoItemの削除ボタンを押下した時', () => {
  it('リストから該当のTodoItemが削除される', () => {
    render(<Todo />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    const value = 'ご飯を炊く';
    userEvent.type(inputElement, value);

    const addButtonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    userEvent.click(addButtonElement);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(1);

    const deleteButtonElement = screen.getByRole('button', {
      name: `${value}を削除する`,
    });
    userEvent.click(deleteButtonElement);

    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });
});

describe('TodoItemのチェックボックスを押下した時', () => {
  it('該当のTodoItemのチェックボックスがcheckedになり、テキストに取り消し線がつく', () => {
    render(<Todo />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    const value = 'ご飯を炊く';
    userEvent.type(inputElement, value);

    const addButtonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    userEvent.click(addButtonElement);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(1);

    const checkbox = screen.getByRole('checkbox', {
      name: `${value}のチェックボックス`,
    });
    const todoContentElement = screen.getByText(value);
    expect(checkbox).not.toBeChecked();
    expect(todoContentElement).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(todoContentElement).toHaveStyle({ textDecoration: 'line-through' });
  });
});
