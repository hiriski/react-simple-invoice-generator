import { FC } from 'react';

// Router.
import { BrowserRouter } from 'react-router-dom';

// Context providers.
import { ThemeProvider, ReduxProvider } from '@/providers';

// App route switch.
import AppRoutes from '@/app-routes';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
