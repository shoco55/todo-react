import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoAdd } from 'components/TodoAdd/TodoAdd';

afterAll(() => {
  cleanup();
});

describe('入力フォームの初期状態', () => {
  it('フォームの値は空であり、追加ボタンは無効化されている', () => {
    render(<TodoAdd addTodo={jest.fn()} />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    const buttonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    expect(inputElement).toHaveValue('');
    expect(buttonElement).toBeDisabled();
  });
});

describe('入力フォームに有効な値を入力をした時', () => {
  it('入力した通りにフォームの値が更新され、追加ボタンが有効化される', () => {
    render(<TodoAdd addTodo={jest.fn()} />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    const value = 'ご飯を炊く';
    const buttonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    userEvent.type(inputElement, value);
    expect(inputElement).toHaveValue(value);
    expect(buttonElement).not.toBeDisabled();
  });
});

describe('入力フォームに無効な値を入力した時', () => {
  it('入力値がホワイトスペースのみの場合、入力フォームの値は更新されるが、追加ボタンが無効化される', () => {
    render(<TodoAdd addTodo={jest.fn()} />);

    const inputElement: HTMLInputElement = screen.getByTitle('タスクを入力');
    userEvent.type(inputElement, '   ');
    expect(inputElement).toHaveValue('   ');

    const buttonElement: HTMLButtonElement = screen.getByRole('button', {
      name: 'タスクを追加',
    });
    expect(buttonElement).toBeDisabled();
  });
});
