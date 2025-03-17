import { EActions, ITodoState, TTodoActionTypes } from './types';

const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: null,
  selectedTodo: null
}

const todosReducer = (state = initialState, action: TTodoActionTypes): ITodoState => {
  switch (action.type) {
    case EActions.FETCH_TODOS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case EActions.FETCH_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case EActions.FETCH_TODOS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case EActions.SELECT_TODO:
      return { ...state, selectedTodo: action.payload };
    default:
      return state;
  }
};

export { todosReducer }