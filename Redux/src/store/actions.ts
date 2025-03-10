export enum EActions {
  SET_TIME = 'SET_TIME',
  START_TIMER = 'START_TIMER',
  STOP_TIMER = 'STOP_TIMER',
  TICK = 'TICK',
}

export const setTimer = (min: number, sec: number) => ({
  type: EActions.SET_TIME,
  payload: { min, sec },
});

export const startTimer = () => ({
  type: EActions.START_TIMER,
});

export const stopTimer = () => ({
  type: EActions.STOP_TIMER,
});

export const tick = () => ({
  type: EActions.TICK,
});
