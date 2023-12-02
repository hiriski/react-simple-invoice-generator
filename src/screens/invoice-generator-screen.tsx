import { FC, ReactNode } from 'react';

// Mui components.
import { Box } from '@mui/material';

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
import { IInvoice } from '@/interfaces/invoice';

// import { PdfPreview } from '@/components/pdf-preview';

import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { invoice_setInvoice, ISetInvoice } from '@/store/invoice/invoice-actions';

// Hooks.
// import { useInvoice } from '@/hooks';

// Generator provider.
const EditableProvider: FC<IGeneratorContext & { children: ReactNode }> = ({ children, editable, debug }) => (
  <generatorContext.Provider value={{ editable, debug }}>{children}</generatorContext.Provider>
);

const InvoiceGeneratorScreen: FC = () => {
  /**
   * BUG
   * I can't use react redux hooks in child components that using component from @react-pdf/renderer 😆😆😆
   */
  const dispatch = useDispatch();

  const setInvoice = (invoice: IInvoice): ISetInvoice => dispatch(invoice_setInvoice(invoice));

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <InvoicePaper>
          <EditableProvider editable={true} debug={false}>
            {<InvoiceEditable />}
          </EditableProvider>
        </InvoicePaper>
        <Box sx={{ ml: 4, flex: 1, position: 'relative' }}>
          <InvoiceDownloadButton setInvoice={setInvoice} />
          <InvoiceSettings />
        </Box>
      </Box>
    </Layout>
  );
};

export default InvoiceGeneratorScreen;
