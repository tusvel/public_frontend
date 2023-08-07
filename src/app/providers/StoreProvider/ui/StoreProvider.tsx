import { type FC, type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type DeepPartial } from '@reduxjs/toolkit';

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>;
};

export const StoreProvider: FC<PropsWithChildren & StoreProviderProps> = (
  props,
) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
