import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';

// Styles.
const lineStyle = { display: 'flex', flexDirection: 'row', alignItems: 'center' };

const InvoicePaymentInfo: FC = () => {
  const { editable } = useGenerator();
  return (
    <Box style={{ marginTop: '16px' }}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Payment Info :'}
      </Typography>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '120px' : '94px' }}>Account :</Typography>
        <Typography>XXX XXX XXX</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '120px' : '94px' }}>A/C Name :</Typography>
        <Typography>-</Typography>
      </Box>
      <Box style={{ height: editable ? 26 : 20, ...lineStyle }}>
        <Typography style={{ width: editable ? '120px' : '94px' }}>Bank Details :</Typography>
        <Typography>-</Typography>
      </Box>
    </Box>
  );
};

export default InvoicePaymentInfo;
