import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router';

const title = {
  organization: 'facebook',
  repository: 'react',
};

export const TitleContext = createContext(title);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <TitleContext.Provider value={title}>
      <RouterProvider router={rootRouter} />
    </TitleContext.Provider>
  </React.StrictMode>,
);
