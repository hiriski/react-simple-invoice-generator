import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { formatRupiah } from '@/utils/currency';

// Interfaces
import { InvoiceLineItem } from '@/interfaces/invoice';

// Styles.
const colStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

interface Props {
  item: InvoiceLineItem;
  index: number;
  lastItem: boolean;
}

const InvoiceLineItem: FC<Props> = ({ item, index, lastItem }) => {
  const { editable } = useGenerator();

  return (
    <Box
      style={{
        backgroundColor: index % 2 === 0 ? '#fff' : '#F6F9FC',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: editable ? '10px 18px' : '7px 16px',
        borderBottomRightRadius: lastItem ? 3 : 0,
        borderBottomLeftRadius: lastItem ? 3 : 0,
      }}
    >
      <Box style={{ width: '55%', ...colStyles }}>
        <Typography>{item.description}</Typography>
      </Box>
      <Box style={{ width: '10%', ...colStyles }}>
        <Typography style={{ marginLeft: '14px' }}>{item.quantity}</Typography>
      </Box>
      <Box style={{ width: '15%', ...colStyles }}>
        <Typography style={{ marginLeft: '14px' }}>{formatRupiah(item.rate)}</Typography>
      </Box>
      <Box style={{ width: '20%', ...colStyles }}>
        <Typography style={{ marginLeft: '14px' }}>{formatRupiah(item.amount)}</Typography>
      </Box>
    </Box>
  );
};

export default InvoiceLineItem;
