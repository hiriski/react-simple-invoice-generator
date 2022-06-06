import { FC, useEffect, useState } from 'react';

// React Pdf.
import { PDFDownloadLink } from '@react-pdf/renderer';

// Mui components.
import { Box, Button, Typography } from '@mui/material';

// Components.
import { Invoice } from '@/components/invoices';

// Context.
import { generatorContext } from '@/context/generator-context';

// Hooks.
// import { useGenerator } from '@/hooks/useGenerator';

// Faker
import { faker } from '@faker-js/faker';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';

interface Props {
  invoice: IInvoice;
}

const InvoiceDownloadButton: FC<Props> = ({ invoice }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(false);

    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [invoice]);

  return (
    <generatorContext.Provider value={{ editable: false, debug: true }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {show && (
          <PDFDownloadLink
            style={{ textDecoration: 'none' }}
            document={<Invoice invoice={invoice} />}
            fileName={`${invoice.fileName ?? 'invoice-' + faker.random.numeric(4)}`}
            aria-label="Save as PDF"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading document...'
              ) : (
                <Button variant="contained" color="secondary" disableElevation>
                  <Typography sx={{ textTransform: 'capitalize' }}>Download PDF</Typography>
                </Button>
              )
            }
          </PDFDownloadLink>
        )}
      </Box>
    </generatorContext.Provider>
  );
};

export default InvoiceDownloadButton;
