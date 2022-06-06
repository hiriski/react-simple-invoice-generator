import { FC, useMemo } from 'react';

// React Pdf.
import { Font } from '@react-pdf/renderer';

// Mui components.
import { Box, Typography } from '@/components/base';

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
import { useGenerator } from '@/hooks/useGenerator';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';

interface Props {
  invoice: IInvoice;
}

/**
 * Register fonts.
 */
const baseUrlFont = IS_PROD
  ? 'https://invoice.riski.me/assets/fonts/Be_Vietnam_Pro'
  : 'http://local-cdn.test/fonts/Be_Vietnam_Pro';

Font.register({
  family: 'Be Vietnam Pro',
  fonts: [
    {
      src: baseUrlFont + '/BeVietnamPro-Regular.ttf',
    }, // font-style: normal, font-weight: normal
    {
      src: baseUrlFont + '/BeVietnamPro-Italic.ttf',
      fontStyle: 'italic',
    },
    {
      src: baseUrlFont + '/BeVietnamPro-Medium.ttf',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    {
      src: baseUrlFont + '/BeVietnamPro-MediumItalic.ttf',
      fontStyle: 'italic',
      fontWeight: 500,
    },
    {
      src: baseUrlFont + '/BeVietnamPro-SemiBold.ttf',
      fontStyle: 'normal',
      fontWeight: 700,
    },
    {
      src: baseUrlFont + '/BeVietnamPro-SemiBoldItalic.ttf',
      fontStyle: 'italic',
      fontWeight: 700,
    },
  ],
});

/**
 * Main Invoice Component.
 */
const Invoice: FC<Props> = ({ invoice }) => {
  const { editable } = useGenerator();

  const subTotal = useMemo(() => {
    let subTotal = 0;
    invoice.items.forEach((i) => {
      const quantityNumber = i.quantity;
      const rateNumber = i.rate;
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      subTotal += amount;
    });

    return subTotal;
  }, [invoice.items]);

  const saleTax = useMemo(() => {
    return subTotal ? (subTotal * Number(invoice.taxRate)) / 100 : 0;
  }, [invoice.items, invoice.taxRate]);

  return (
    <Document>
      <Page>
        <Container>
          <InvoiceTitle title="INVOICE" />
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoiceCompanyLogo />
              <InvoiceSender from={invoice.sender} />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '14px' }}>
              <InvoiceRecipient recipient={invoice.recipient} />
              <InvoiceInfo invoice={invoice} />
            </Box>
          </Box>
          <Box style={{ marginBottom: '16px' }}>
            <InvoiceItemHeader />
            {Array.isArray(invoice.items) && invoice.items.length > 0 ? (
              // Render invoice items
              invoice.items.map((item, index) => (
                <InvoiceLineItem
                  key={String(index)}
                  index={index}
                  item={item}
                  lastItem={invoice.items.length - 1 === index}
                />
              ))
            ) : (
              <Typography>Add invoice item</Typography>
            )}
          </Box>

          {/*  Invoice Summary & Payment Info */}
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoicePaymentInfo />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoiceSummary subTotal={subTotal} taxRate={Number(invoice.taxRate)} saleTax={saleTax} />
            </Box>
          </Box>

          {/* Invoice Term & Conditions */}
          <Box style={{ display: 'flex', flexDirection: 'row', width: '50%', marginBottom: '20px' }}>
            <InvoiceTermAndConditions terms={String(invoice.terms)} />
          </Box>
        </Container>

        {/* Footer messages */}
        <InvoiceFooter message={invoice.footerMessages} />
      </Page>
    </Document>
  );
};
export default Invoice;
