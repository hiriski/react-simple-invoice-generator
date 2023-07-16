import { FC, useMemo } from 'react';

// React Pdf.
import { Font } from '@react-pdf/renderer';

// Mui components.
import { Box } from '@/components/base';

// Base components.
import { Document, Page, Container } from '@/components/base';

// Invoice components.
import InvoiceInfo from './invoice-info';
import InvoiceFooter from './invoice-footer';
import InvoiceSender from './invoice-sender';
import InvoiceSummary from './invoice-summary';
import InvoiceLineItem from './invoice-line-item';
import InvoiceTitle from '../invoices/invoice-title';
import InvoicePaymentInfo from './invoice-payment-info';
import InvoiceItemHeader from './invoice-line-item-header';
import InvoiceCompanyLogo from '../invoices/invoice-company-logo';
import InvoiceTermAndConditions from './invoice-term-and-condition';
import InvoiceRecipient from '@/components/invoices/invoice-recipient';

// Hooks.
// import { useGenerator } from '@/hooks/useGenerator';

// Interfaces.
import { IInvoice, IInvoicePaymentInfo } from '@/interfaces/invoice';

interface Props {
  invoice: IInvoice;
}

/**
 * Register fonts.
 */
const baseUrlFont = IS_PROD
  ? 'https://react-simple-invoice-generator.vercel.app/assets/fonts/Plus_Jakarta_Sans'
  : 'http://127.0.0.1:5500/src/assets/fonts/Plus_Jakarta_Sans';

Font.register({
  family: 'Plus Jakarta Sans',
  fonts: [
    {
      src: baseUrlFont + '/PlusJakartaSans-Light.ttf',
      fontStyle: 'normal',
      fontWeight: 300,
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-LightItalic.ttf',
      fontStyle: 'italic',
      fontWeight: 300,
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-Regular.ttf',
    }, // font-style: normal, font-weight: normal
    {
      src: baseUrlFont + '/PlusJakartaSans-Italic.ttf',
      fontStyle: 'italic',
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-Medium.ttf',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-MediumItalic.ttf',
      fontStyle: 'italic',
      fontWeight: 500,
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-SemiBold.ttf',
      fontStyle: 'normal',
      fontWeight: 700,
    },
    {
      src: baseUrlFont + '/PlusJakartaSans-SemiBoldItalic.ttf',
      fontStyle: 'italic',
      fontWeight: 700,
    },
  ],
});

/**
 * Main Invoice Component.
 */
const InvoicePdf: FC<Props> = ({ invoice }) => {
  const subTotal = useMemo(() => {
    let subTotal = 0;
    invoice.items.forEach((i) => {
      const quantityNumber = parseFloat(i.quantity);
      const rateNumber = parseFloat(i.rate);
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      subTotal += amount;
    });

    return subTotal;
  }, [invoice.items]);

  const saleTax = useMemo(() => {
    const taxRate = parseFloat(String(invoice.taxRate)) || 0;
    return subTotal ? (subTotal * taxRate) / 100 : 0;
  }, [invoice.items, invoice.taxRate]);

  return (
    <Document>
      <Page>
        <Container>
          <InvoiceTitle title="INVOICE" />
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: '15px' }}>
              <InvoiceCompanyLogo logo={invoice.logo} onUploadImage={() => null} />
              <InvoiceSender from={invoice.sender} />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '15px' }}>
              <InvoiceRecipient recipient={invoice.recipient} />
              <InvoiceInfo invoiceNumber={invoice.invoiceNumber} date={invoice.date} due={String(invoice.due)} />
            </Box>
          </Box>
          <Box style={{ marginBottom: '16px' }}>
            <InvoiceItemHeader />
            {Array.isArray(invoice.items) && invoice.items.length > 0
              ? // Render invoice items
                invoice.items.map((item, index) => (
                  <InvoiceLineItem
                    dispatchAlert={() => null}
                    onChange={() => null}
                    key={String(index)}
                    index={index}
                    item={item}
                    lastItem={invoice.items.length - 1 === index}
                  />
                ))
              : null}
          </Box>

          {/*  Invoice Summary & Payment Info */}
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoicePaymentInfo paymentInfo={invoice.paymentInfo as IInvoicePaymentInfo} />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoiceSummary subTotal={subTotal} taxRate={Number(invoice.taxRate)} saleTax={saleTax} />
            </Box>
          </Box>

          {/* Invoice Term & Conditions */}
          <Box style={{ display: 'flex', flexDirection: 'row', width: '70%', marginBottom: '20px' }}>
            <InvoiceTermAndConditions terms={String(invoice.terms)} />
          </Box>
        </Container>

        {/* Footer messages */}
        <InvoiceFooter message={invoice.footerMessages} />
      </Page>
    </Document>
  );
};
export default InvoicePdf;
