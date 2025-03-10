import { createStore } from 'redux';

import timerReducer from './reducer';

const store = createStore(timerReducer);

export default store;
