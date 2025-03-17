interface ITodo {
  userId: number;
  id: number;
  title: string;
  isCompleted: boolean;
}

interface ITodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
  selectedTodo: ITodo | null;
}

enum EActions {
  FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  SELECT_TODO = 'SELECT_TODO'
}

type TTodoActionTypes = 
  | { type: EActions.FETCH_TODOS_REQUEST }
  | { type: EActions.FETCH_TODOS_SUCCESS, payload: ITodo[] }
  | { type: EActions.FETCH_TODOS_FAILURE, payload: string }
  | { type: EActions.SELECT_TODO, payload: ITodo }

export { EActions }
export type { ITodo, ITodoState, TTodoActionTypes }