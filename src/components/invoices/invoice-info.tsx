import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';

// Interfaces.
import { IInvoice } from '@/interfaces/invoice';

// Styles.
const lineStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };
const textStyle = { fontWeight: 600 };

interface Props {
  invoice: IInvoice;
}

const InvoiceInfo: FC<Props> = ({ invoice }) => {
  const { editable } = useGenerator();
  return (
    <Box style={{ backgroundColor: '#F7FBFF', borderRadius: 3, padding: editable ? '16px 20px' : '12px 16px' }}>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Invoice No :</Typography>
        <Typography>{invoice.invoiceNumber}</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Invoice Date :</Typography>
        <Typography>{invoice.date}</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Due Date :</Typography>
        <Typography>{invoice.due}</Typography>
      </Box>
    </Box>
  );
};

export default InvoiceInfo;
