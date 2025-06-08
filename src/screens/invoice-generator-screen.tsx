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
import { Sidebar } from '@/components/sidebar';
import { SIDEBAR_CONTAINER_WIDTH } from '@/constants';

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
        <Box sx={{ width: { xs: '100%', md: SIDEBAR_CONTAINER_WIDTH }, position: 'relative' }}>
          <Sidebar />
        </Box>
        <Box
          sx={{
            overflow: 'scroll',
            width: {
              xs: '100',
              md: `calc(100% - ${SIDEBAR_CONTAINER_WIDTH}px)`,
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ height: '100vh', pt: 4 }}>
            <InvoicePaper>
              <EditableProvider editable={true} debug={false}>
                {<InvoiceEditable />}
              </EditableProvider>
              <InvoiceDownloadButton setInvoice={setInvoice} />
            </InvoicePaper>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default InvoiceGeneratorScreen;
