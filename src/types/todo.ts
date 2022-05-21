export type TodoType = {
  id: number;
  content: string;
  isCompleted: boolean;
};

type Optional = 'id';
export type TodoTypePost = Omit<TodoType, Optional>;
