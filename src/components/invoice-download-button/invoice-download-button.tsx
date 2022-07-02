import { FC, useCallback, useEffect, useMemo } from 'react';

// React Pdf.
import { Document, Page, Text, usePDF } from '@react-pdf/renderer';

// Mui components.
import { Box, IconButton, Typography } from '@mui/material';

// Context.
import { generatorContext } from '@/context/generator-context';

// Faker
// import { faker } from '@faker-js/faker';

// Components.
import { InvoicePdf } from '../invoices';
import { StyledButton } from '@/components/base';

/** Mui icons. */
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

// date fns
import { format } from 'date-fns';

interface PdfDocumentProps {
  invoice: IInvoice;
}
const PdfDocument: FC<PdfDocumentProps> = ({ invoice }) => <InvoicePdf invoice={invoice} />;

// Interfaces.
import { useAppSelector } from '@/store';
import { IInvoice } from '@/interfaces/invoice';
import { ISetInvoice } from '@/store/invoice/invoice-actions';
import { useInvoice } from '@/hooks';
import { ArrowDownward } from '@mui/icons-material';

const BUTTON_SIZE = 50;

interface Props {
  setInvoice: (invoice: IInvoice) => ISetInvoice;
}
const InvoiceDownloadButton: FC<Props> = ({ setInvoice }) => {
  const { invoice_data: persistedInvoice } = useAppSelector((state) => state.invoice);
  const { invoice } = useInvoice();

  const [pdfInstance, updatePdfInstance] = usePDF({
    document: persistedInvoice ? (
      <PdfDocument invoice={invoice} />
    ) : (
      <Document>
        <Page>
          <Text>Opss...</Text>
        </Page>
      </Document>
    ),
  });

  useEffect(() => {
    const intervalAutoSaveInvoice = setInterval(() => {
      setInvoice(invoice);
      updatePdfInstance();
    }, 2000);
    return () => clearInterval(intervalAutoSaveInvoice);
  }, [invoice]);

  const handleDownloadPdf = (): void => {
    setInvoice(invoice);

    // updatePdfInstance();

    fetch(String(pdfInstance.url), {
      method: 'GET',
      headers: { 'Content-Type': pdfInstance.blob?.type || 'application/pdf' },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;

        const invoiceFileName = persistedInvoice.fileName
          ? `${persistedInvoice.fileName}_${format(new Date(persistedInvoice.date), 'dd/MM/yyyy')} + .pdf`
          : `invoice_${format(new Date(persistedInvoice.date), 'dd/MM/yyyy')}.pdf`;

        // Set attribute link download
        link.setAttribute('download', invoiceFileName);

        // Append link to the element;
        document.body.appendChild(link);

        // Finally download file.
        link.click();

        // Clean up and remove it from dom
        link.parentNode?.removeChild(link);
      });
  };
  /** Set persisted invoice */
  useEffect(() => {
    if (!persistedInvoice) setInvoice(invoice);
  }, [persistedInvoice]);

  return (
    <generatorContext.Provider value={{ editable: false, debug: true }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          top: -BUTTON_SIZE / 2,
          left: BUTTON_SIZE / 2,
        }}
      >
        {!pdfInstance.error ? (
          !pdfInstance.loading && (
            <IconButton
              sx={{
                backgroundColor: 'secondary.main',
                border: '3px solid #fff',
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                borderRadius: `${BUTTON_SIZE}px`,
                transition: (theme) => theme.transitions.create(['width']),
                textAlign: 'center',
                overflow: 'hidden',
                '& .MuiTypography-root': {
                  transform: 'translateX(150px)',
                  transition: (theme) => theme.transitions.create(['transform', 'width']),
                  fontSize: 0,
                },
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  width: 180,
                  '& .MuiTypography-root': {
                    transform: 'translateX(0px)',
                    fontSize: 13,
                  },
                  '& svg': {
                    mr: 2,
                  },
                },
              }}
              onClick={handleDownloadPdf}
            >
              <DownloadIcon sx={{ color: 'secondary.contrastText', fontSize: 26 }} />
              <Typography sx={{ color: 'secondary.contrastText', fontWeight: 'bold' }}>Download PDF</Typography>
            </IconButton>
          )
        ) : (
          <StyledButton color="error" startIcon={<CloseIcon />}>
            Error
          </StyledButton>
        )}
      </Box>
    </generatorContext.Provider>
  );
};

export default InvoiceDownloadButton;
