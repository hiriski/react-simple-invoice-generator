import { FC } from 'react';

// Router.
import { BrowserRouter } from 'react-router-dom';

// Context providers.
import { InvoiceProvider } from '@/providers';

// App route switch.
import AppRoutes from '@/app-routes';
import { useAppSelector } from './store';

// Global components.
import { Snackbar } from '@/components/common';
import { MuiThemeProvider } from '@/plugins/@mui/components';

const App: FC = () => {
  const { invoice_data } = useAppSelector((state) => state.invoice);
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <InvoiceProvider value={invoice_data}>
          <AppRoutes />
          <Snackbar />
        </InvoiceProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
