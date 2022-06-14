import { FC, memo } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';
import EditableDatePicker from '../base/editable-date-picker';

// Styles.
const lineStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };
const textStyle = { fontWeight: 600 };

interface Props {
  invoiceNumber: string;
  date: string;
  due: string;
}

const InvoiceInfo: FC<Props> = ({ invoiceNumber, date, due }) => {
  const { editable } = useGenerator();

  return (
    <Box style={{ backgroundColor: '#F7FBFF', borderRadius: 3, padding: editable ? '16px 20px' : '12px 16px' }}>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Invoice No :</Typography>
        <Typography>{invoiceNumber}</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Invoice Date :</Typography>
        <Typography>{date}</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '90px', ...textStyle }}>Due Date :</Typography>
        <Typography>{due}</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>{editable && <EditableDatePicker />}</Box>
    </Box>
  );
};

const MemoizedInvoiceInfo = memo(InvoiceInfo);
export default MemoizedInvoiceInfo;
