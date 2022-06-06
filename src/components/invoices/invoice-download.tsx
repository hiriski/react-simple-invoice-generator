import { FC } from 'react';

// React Pdf.
import { PDFDownloadLink } from '@react-pdf/renderer';

// Mui components.
import { Button, Typography } from '@mui/material';

// Components.
import Invoice from './invoice';

// Context.
import { generatorContext } from '@/context/generator-context';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';

interface Props {
  invoice: IInvoice;
}

const DownloadButton: FC<Props> = ({ invoice }) => {
  return (
    <generatorContext.Provider value={{ editable: false, debug: true }}>
      <div style={{ margin: '1rem 0' }} title="Save PDF">
        <PDFDownloadLink
          style={{ textDecoration: 'none' }}
          document={<Invoice invoice={invoice} />}
          // document={<TestInvoiceDocument />}
          fileName={`test.pdf`}
          aria-label="Save PDF"
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
      </div>
    </generatorContext.Provider>
  );
};

export default DownloadButton;
