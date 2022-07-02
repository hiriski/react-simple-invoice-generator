import { ChangeEvent, FC } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';
import { useInvoice } from '@/hooks';
import { IInvoicePaymentInfo } from '@/interfaces/invoice';

// Styles.
const lineStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };

interface Props {
  paymentInfo: IInvoicePaymentInfo;
}

const InvoicePaymentInfo: FC<Props> = ({ paymentInfo }) => {
  const { editable } = useGenerator();
  const { invoice, setInvoice } = useInvoice();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInvoice({
      ...invoice,
      paymentInfo: {
        ...invoice.paymentInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Box style={{ marginTop: '16px', width: '95%' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Payment Info :'}
      </Typography>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '140px' : '80px' }}>Account :</Typography>
        {editable ? (
          <EditableText
            sx={{ width: '100%' }}
            name="accountNumber"
            value={paymentInfo.accountNumber}
            onChange={handleChange}
          />
        ) : (
          <Typography>{paymentInfo.accountNumber}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '140px' : '80px' }}>A/C Name :</Typography>
        {editable ? (
          <EditableText
            sx={{ width: '100%' }}
            name="accountName"
            value={paymentInfo.accountName}
            onChange={handleChange}
          />
        ) : (
          <Typography>{paymentInfo.accountName}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '140px' : '80px' }}>Bank Details :</Typography>
        {editable ? (
          <EditableText
            sx={{ width: '100%' }}
            name="bankAccount"
            value={paymentInfo.bankAccount}
            onChange={handleChange}
          />
        ) : (
          <Typography>{paymentInfo.bankAccount}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default InvoicePaymentInfo;
