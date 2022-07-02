import { FC } from 'react';

// Router.
import { BrowserRouter } from 'react-router-dom';

// Context providers.
import { ThemeProvider, LocalizationProvider, InvoiceProvider } from '@/providers';

// App route switch.
import AppRoutes from '@/app-routes';
import { useAppSelector } from './store';

// Global components.
import { Snackbar } from '@/components/common';

const App: FC = () => {
  const { invoice_data } = useAppSelector((state) => state.invoice);
  return (
    <ThemeProvider>
      <BrowserRouter>
        <LocalizationProvider>
          <InvoiceProvider value={invoice_data}>
            <AppRoutes />
            <Snackbar />
          </InvoiceProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
