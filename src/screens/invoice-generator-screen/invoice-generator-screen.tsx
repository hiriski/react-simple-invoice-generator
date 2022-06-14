import { Dispatch, FC, ReactNode } from 'react';

// Mui components.
import { Box, Grid } from '@mui/material';

// Layout
import { Layout } from '@/components/layout';

// Components.
import { InvoiceEditable } from '@/components/invoices';
import { InvoicePaper } from '@/components/invoice-paper';
import { InvoiceSettings } from '@/components/invoice-settings';
import { InvoiceDownloadButton } from '@/components/invoice-download-button';

// Context.
import { generatorContext, IGeneratorContext } from '@/context/generator-context';

// Interfaces.
import { IInvoice, IInvoiceLineItem } from '@/interfaces/invoice';

import { PdfPreview } from '@/components/pdf-preview';

import TestButton from '@/components/test-button/test-button';
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { invoice_setInvoice, invoice_setInvoiceLineItem, ISetInvoice } from '@/store/invoice/invoice-actions';

// Hooks.
import { useInvoice } from '@/hooks';

// Generator provider.
const EditableProvider: FC<IGeneratorContext & { children: ReactNode }> = ({ children, editable, debug }) => (
  <generatorContext.Provider value={{ editable, debug }}>{children}</generatorContext.Provider>
);

const InvoiceGeneratorScreen: FC = () => {
  const { invoice_data: persistedInvoice } = useAppSelector((state) => state.invoice);

  /**
   * BUG
   * I can't use react redux hooks in child components that using component from @react-pdf/renderer 😆😆😆
   */
  const dispatch = useDispatch();

  const setInvoice = (invoice: IInvoice): ISetInvoice => dispatch(invoice_setInvoice(invoice));

  return (
    <Layout>
      <Grid container spacing={3}>
        <InvoicePaper>
          <EditableProvider editable={true} debug={false}>
            {<InvoiceEditable />}
          </EditableProvider>
        </InvoicePaper>
        <Box sx={{ flex: 1, ml: 4 }}>
          <InvoiceDownloadButton setInvoice={setInvoice} />
          {/* <TestButton /> */}
          {/* <InvoiceSettings /> */}
          <PdfPreview onDrawer={false} invoice={persistedInvoice} />
        </Box>
      </Grid>
    </Layout>
  );
};

export default InvoiceGeneratorScreen;
