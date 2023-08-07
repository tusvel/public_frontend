import { type FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{count}</h1>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="decrement-btn" onClick={onDecrement}>
        Decrement
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="increment-btn" onClick={onIncrement}>
        Increment
      </Button>
    </div>
  );
};
