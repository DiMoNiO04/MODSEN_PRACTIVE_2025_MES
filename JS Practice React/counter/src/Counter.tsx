import { useState } from 'react';
import { Btn } from './Btn';
import { CountNumber } from './CountNumber';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const onClickPlusBtn = () => setCount(prev => prev + 1);
  const onClickMinusBtn = () => setCount(prev => prev - 1);

  return (
    <div className='container'>
      <h1>Counter</h1>

      <div className='counter'>
        <Btn text='minus' count={count} onClick={onClickMinusBtn} />
        <CountNumber count={count} />
        <Btn text='plus' count={count} onClick={onClickPlusBtn} />
      </div>
    </div>
  )
}