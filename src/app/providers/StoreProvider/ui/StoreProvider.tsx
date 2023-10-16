import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';

interface IStoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
