import todosRepository from './todosRepository';

type Resources = 'todos';

const repositories = {
  todos: todosRepository,
};

export const RepositoryFactory = {
  get: (name: Resources) => repositories[name],
};
