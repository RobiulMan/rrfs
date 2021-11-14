import { DeleteTodoAction, FetchTodosAction } from ".";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
