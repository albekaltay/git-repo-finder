"use client";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  try {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
  } catch (error) {
    console.error('Provider error:', error);
    return <>{children}</>;
  }
}
