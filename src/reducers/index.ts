import { combineReducers } from "redux";
import { Todo } from "../action";
import { todosReducer } from "./todos";

export interface StoreState {
  todos: Todo[];
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
