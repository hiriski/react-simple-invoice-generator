import { FC, useCallback, useEffect, useMemo } from 'react';

// React Pdf.
import { PDFDownloadLink, Document, Page, Text, usePDF } from '@react-pdf/renderer';

// Mui components.
import { Box, Button, Typography } from '@mui/material';

// Context.
import { generatorContext } from '@/context/generator-context';

// Hooks.
// import { useGenerator } from '@/hooks/useGenerator';

// Faker
import { faker } from '@faker-js/faker';

// Components.
import { InvoicePdf } from '../invoices';
import { StyledButton } from '../base';

/** Mui icons. */
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CloseIcon from '@mui/icons-material/Close';

interface PdfDocumentProps {
  invoice: IInvoice;
}
const PdfDocument: FC<PdfDocumentProps> = ({ invoice }) => <InvoicePdf invoice={invoice} />;

// Interfaces.
import { useAppSelector } from '@/store';
import { IInvoice } from '@/interfaces/invoice';
import { ISetInvoice } from '@/store/invoice/invoice-actions';
import { useInvoice } from '@/hooks';

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

  const loadingButton = useMemo<boolean>(() => {
    return pdfInstance.loading;
  }, [persistedInvoice, pdfInstance.loading]);

  const handleDownloadPdf = (): void => {
    setInvoice(invoice);

    updatePdfInstance();

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

        // Set attribute link download
        link.setAttribute(
          'download',
          persistedInvoice.fileName + '_' + persistedInvoice.date.toString() + '.pdf' ||
            'invoice-' + faker.random.numeric(4) + '.pdf',
        );

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
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {!pdfInstance.error ? (
          !pdfInstance.loading ? (
            <StyledButton
              color="primary"
              startIcon={<FileDownloadIcon />}
              isLoading={pdfInstance.loading}
              onClick={handleDownloadPdf}
            >
              Download PDF
            </StyledButton>
          ) : (
            <StyledButton isLoading={true}>Download PDF</StyledButton>
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
