import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TodoDetail: FC = () => {
  const { selectedTodo } = useSelector((state: RootState) => state);

  if(!selectedTodo) {
    return (
      <p>Выберите задачу для просмотра деталей</p>
    )
  }

  return (
    <div>
      <h3>Детали задачи</h3>
      <p><strong>ID:</strong> {selectedTodo.id}</p>
      <p><strong>Название:</strong> {selectedTodo.title}</p>
      <p><strong>Статус:</strong> {selectedTodo.isCompleted ? 'Выполнена' : 'Не выполнена'}</p>
    </div>
  );
}

export { TodoDetail }