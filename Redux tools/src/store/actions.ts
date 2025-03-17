import { EActions, ITodo, TTodoActionTypes } from './types';

const fetchTodoRequest = (): TTodoActionTypes => ({
  type: EActions.FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (todos: ITodo[]): TTodoActionTypes => ({
  type: EActions.FETCH_TODOS_SUCCESS,
  payload: todos
})

const fetchTodosFailure = (error: string): TTodoActionTypes => ({
  type: EActions.FETCH_TODOS_FAILURE,
  payload: error
})

const selectTodo = (todo: ITodo): TTodoActionTypes => ({
  type: EActions.SELECT_TODO,
  payload: todo
})

export { fetchTodoRequest, fetchTodosSuccess, fetchTodosFailure, selectTodo }