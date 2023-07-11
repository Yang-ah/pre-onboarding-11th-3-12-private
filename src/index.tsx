import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router';

const title = {
  organization: 'facebook',
  repository: 'react',
};

export const IssuesContext = createContext(title);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <IssuesContext.Provider value={title}>
      <RouterProvider router={rootRouter} />
    </IssuesContext.Provider>
  </React.StrictMode>,
);
