import { FC, useMemo } from 'react';

// Mui components.
import { Box } from '@/components/base';

// Base components.
import { Document, Page, Container } from '@/components/base';

// Invoice components.
import InvoiceInfo from './invoice-info';
import DialogSender from './dialog-sender';
import InvoiceFooter from './invoice-footer';
import InvoiceSender from './invoice-sender';
import InvoiceSummary from './invoice-summary';
import AddInvoiceItem from './add-invoice-item';
import DialogRecipient from './dialog-recipient';
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
import { IInvoiceLineItem, IInvoicePaymentInfo } from '@/interfaces/invoice';
import { useInvoice } from '@/hooks';
import { useDispatch } from 'react-redux';
import { app_setAlert } from '@/store/app/app-actions';
import { invoice_setDialogRecipient, invoice_setDialogSender } from '@/store/invoice/invoice-actions';

const InvoiceEditable: FC = () => {
  const dispatch = useDispatch();
  const { editable } = useGenerator();
  const { invoice, handleChangeLineItem, updateLogo } = useInvoice();

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

  /**
   *  I can't use it in child components.
   */
  const handleShowAlert = (item: IInvoiceLineItem): void => {
    dispatch(
      app_setAlert({
        show: true,
        messages: `Item ${item.description} has been removed!`,
        severity: 'success',
      }),
    );
  };

  const onOpenDialogEditRecipient = (): void => {
    dispatch(invoice_setDialogRecipient(true));
  };

  const onOpenDialogEditSender = (): void => {
    dispatch(invoice_setDialogSender(true));
  };

  return (
    <Document>
      <Page>
        <DialogSender />
        <DialogRecipient />
        <Container>
          <InvoiceTitle title="INVOICE" />
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column', marginRight: '20px' }}>
              <InvoiceCompanyLogo logo={invoice.logo} onUploadImage={updateLogo} />
              <InvoiceSender from={invoice.sender} handleOpenDialog={onOpenDialogEditSender} />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column', marginLeft: '20px' }}>
              <InvoiceRecipient recipient={invoice.recipient} handleOpenDialog={onOpenDialogEditRecipient} />
              <InvoiceInfo invoiceNumber={invoice.invoiceNumber} date={invoice.date} due={String(invoice.due)} />
            </Box>
          </Box>
          <Box style={{ marginBottom: '16px' }}>
            <InvoiceItemHeader />
            {Array.isArray(invoice.items) &&
              invoice.items.length > 0 &&
              // Render invoice items
              invoice.items.map((item, index) => (
                <InvoiceLineItem
                  dispatchAlert={handleShowAlert}
                  onChange={handleChangeLineItem}
                  key={String(index)}
                  index={index}
                  item={item}
                  lastItem={invoice.items.length - 1 === index}
                />
              ))}

            {editable && <AddInvoiceItem />}
          </Box>

          {/*  Invoice Summary & Payment Info */}
          <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoicePaymentInfo paymentInfo={invoice.paymentInfo as IInvoicePaymentInfo} />
            </Box>
            <Box style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <InvoiceSummary subTotal={subTotal} taxRate={invoice.taxRate} saleTax={saleTax} />
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
export default InvoiceEditable;
