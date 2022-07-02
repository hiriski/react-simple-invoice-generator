import { ChangeEvent, FC, memo } from 'react';

// Base components.
import { Box, EditableText, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';
import EditableDatePicker from '../base/editable-date-picker';
import { useInvoice } from '@/hooks';

// Date fns
import { format } from 'date-fns';

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

  const { invoice, setInvoice } = useInvoice();

  const onChangeInvoiceNumber = (e: ChangeEvent<HTMLInputElement>): void => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const onChangeDate = (property: 'date' | 'due', value: string): void => {
    setInvoice({ ...invoice, [property]: value });
  };

  return (
    <Box style={{ backgroundColor: '#F7FBFF', borderRadius: 3, padding: editable ? '16px 20px' : '12px 16px' }}>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '80px', ...textStyle }}>Invoice No :</Typography>
        {editable ? (
          <EditableText name="invoiceNumber" value={invoiceNumber} onChange={onChangeInvoiceNumber} />
        ) : (
          <Typography>{invoiceNumber}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '80px', ...textStyle }}>Invoice Date :</Typography>
        {editable ? (
          <EditableDatePicker label="Date" name="date" value={invoice.date} onChange={onChangeDate} />
        ) : (
          <Typography>{format(new Date(date), 'dd/MM/yyyy')}</Typography>
        )}
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ minWidth: editable ? '110px' : '80px', ...textStyle }}>Due Date :</Typography>
        {editable ? (
          <EditableDatePicker label="Due date" name="due" value={String(invoice.due)} onChange={onChangeDate} />
        ) : (
          <Typography>{format(new Date(due), 'dd/MM/yyyy')}</Typography>
        )}
      </Box>
    </Box>
  );
};

const MemoizedInvoiceInfo = memo(InvoiceInfo);
export default MemoizedInvoiceInfo;
