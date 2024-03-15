import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import type { ReducersMapObject } from '@reduxjs/toolkit';

export type componentRenderOptions = {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {},
) => {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <MemoryRouter basename={route}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
