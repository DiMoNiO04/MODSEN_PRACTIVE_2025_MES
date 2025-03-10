import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { setTimer,startTimer, stopTimer, tick } from './store/actions';
import { IInitialState } from './store/reducer';

function Timer() {
  const [inpMin, setInpMin] = useState<number>(0);
  const [inpSec, setInpSec] = useState<number>(0);

  const dispatch = useDispatch();
  const { min, sec, isStart } = useSelector((state: IInitialState) => state);

  const handleStart = () => {
    dispatch(startTimer());
    setInpMin(0);
    setInpSec(0);
  };
  const handleStop = () => dispatch(stopTimer());
  const handleSetTime = () => dispatch(setTimer(inpMin, inpSec));

  useEffect(() => {
    let interval: number | undefined;
    if (isStart) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isStart, dispatch]);

  return (
    <div>
      <div>
        <h2>Таймер</h2>
        <div>
          <input
            type="number"
            value={inpMin}
            onChange={(e) => setInpMin(Number(e.target.value))}
            placeholder="Минуты"
          />
          <input
            type="number"
            value={inpSec}
            onChange={(e) => setInpSec(Number(e.target.value))}
            placeholder="Секунды"
          />
          <button onClick={handleSetTime}>Установить время</button>
        </div>

        <div>
          <h3>
            Время: {String(min).padStart(2, '0')} : {String(sec).padStart(2, '0')}
          </h3>
        </div>

        <div>{isStart ? <button onClick={handleStop}>Стоп</button> : <button onClick={handleStart}>Старт</button>}</div>
      </div>
    </div>
  );
}

export default Timer;
