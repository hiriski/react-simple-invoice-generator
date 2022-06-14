import { FC } from 'react';

// React Pdf.
import { PDFViewer } from '@react-pdf/renderer';

// Mui Components.
import Drawer from '@mui/material/Drawer';

// Components.
import { InvoicePdf } from '../invoices';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';
import { useAppSelector } from '@/store';

interface Props {
  invoice: IInvoice;
  onDrawer?: boolean;
}

const PdfPreview: FC<Props> = ({ invoice, onDrawer }) => {
  const { app_showDrawerPreviewPdf } = useAppSelector((state) => state.app);
  return onDrawer ? (
    <Drawer
      elevation={0}
      anchor="right"
      open={app_showDrawerPreviewPdf}
      onClose={() => null}
      PaperProps={{
        sx: {
          width: { xs: '100%', md: 500 },
        },
      }}
    >
      <PDFViewer showToolbar={false} style={{ width: '210mm', height: '297mm' }}>
        <InvoicePdf invoice={invoice} />
      </PDFViewer>
    </Drawer>
  ) : (
    <PDFViewer showToolbar={false} style={{ width: '210mm', height: '297mm' }}>
      <InvoicePdf invoice={invoice} />
    </PDFViewer>
  );
};

export default PdfPreview;
