import { EActions } from './actions';

export interface IInitialState {
  min: number;
  sec: number;
  isStart: boolean;
}

const initialState: IInitialState = {
  min: 0,
  sec: 0,
  isStart: false,
};

type TimerAction =
  | { type: EActions.SET_TIME; payload: { min: number; sec: number } }
  | { type: EActions.START_TIMER }
  | { type: EActions.STOP_TIMER }
  | { type: EActions.TICK };

const timerReducer = (state = initialState, action: TimerAction): IInitialState => {
  switch (action.type) {
    case EActions.SET_TIME: {
      return {
        ...state,
        min: action.payload.min,
        sec: action.payload.sec,
      };
    }
    case EActions.START_TIMER: {
      return {
        ...state,
        isStart: true,
      };
    }
    case EActions.STOP_TIMER: {
      return {
        ...state,
        isStart: false,
      };
    }
    case EActions.TICK: {
      if (state.sec === 0 && state.min === 0) {
        return { ...state, isStart: false };
      }
      if (state.sec === 0) {
        return {
          ...state,
          min: state.min - 1,
          sec: 59,
        };
      } else {
        return { ...state, sec: state.sec - 1 };
      }
    }
    default:
      return state;
  }
};

export default timerReducer;
