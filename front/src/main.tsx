import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import './index.css'
import "./api/axios-global.js";

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

import AppRouter from './routes/AppRouter.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
