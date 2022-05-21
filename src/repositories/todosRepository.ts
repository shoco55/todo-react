import { AxiosResponse } from 'axios';
import snakecaseKeys from 'snakecase-keys';

import { ApiResponse } from 'types/apiResponse';
import { TodoType, TodoTypePost } from 'types/todo';
import Repository from './Repository';

const resource = '/todos';

export default {
  getTodos(): Promise<AxiosResponse<ApiResponse<TodoType[]>>> {
    return Repository.get(`${resource}`);
  },
  postTodo(data: TodoTypePost): Promise<AxiosResponse<ApiResponse<TodoType>>> {
    return Repository.post(`${resource}`, snakecaseKeys(data));
  },
  updateTodo(
    id: number,
    data: TodoTypePost
  ): Promise<AxiosResponse<ApiResponse<TodoType>>> {
    return Repository.put(
      `${resource}/:id`.replace(':id', `${id}`),
      snakecaseKeys(data)
    );
  },
  deleteTodo(id: number): Promise<AxiosResponse<ApiResponse<{ id: number }>>> {
    return Repository.delete(`${resource}/:id`.replace(':id', `${id}`));
  },
};
