import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/providers';
import RootRoutes from './root-routes';

const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
