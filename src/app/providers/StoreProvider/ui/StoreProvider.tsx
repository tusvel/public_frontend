import { type FC, type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type ReducersMapObject } from '@reduxjs/toolkit';

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const StoreProvider: FC<PropsWithChildren & StoreProviderProps> = (
  props,
) => {
  const { children, initialState, asyncReducers } = props;
  // const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    // navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};
