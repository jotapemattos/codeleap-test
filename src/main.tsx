import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';

import { storeName } from './redux/SignUp/store.ts';
import { storePost } from './redux/FormPosts/store.ts'
// eslint-disable-next-line prettier/prettier
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={storePost}>
      <Provider store={storeName}>
        <App />
      </Provider>
    </Provider>
  </React.StrictMode>
);
