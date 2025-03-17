import { call, put, takeEvery } from 'redux-saga/effects';
import { EActions, ITodo } from './types';
import axios from 'axios';
import { fetchTodosFailure, fetchTodosSuccess } from './actions';

function* fetchTodoSaga() {
  try {
    const response: { data: ITodo[] } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    yield put(fetchTodosSuccess(response.data))
  } catch (error: any) {
    yield put(fetchTodosFailure(error.message))
  }
}

function* rootSaga() {
  yield takeEvery(EActions.FETCH_TODOS_REQUEST, fetchTodoSaga)
}

export { rootSaga }