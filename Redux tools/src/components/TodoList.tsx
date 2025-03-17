import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { fetchTodoRequest, selectTodo } from '../store/actions';
import { ITodo } from '../store/types';

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector(( state: RootState ) => state);

  useEffect(() => {
    dispatch(fetchTodoRequest())
  }, [dispatch]);

  return (
    <div>
      <h2>Список задач</h2>
      {isLoading && <p>Загрузка....</p>}
      {error && <p>Ошибка: {error}</p>}
      <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo.id} onClick={() => dispatch(selectTodo(todo))} >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { TodoList }