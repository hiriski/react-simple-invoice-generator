import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';

interface Props {
  message?: string;
}

const InvoiceFooter: FC<Props> = ({ message }) => {
  const { editable } = useGenerator();

  return (
    <Box
      fixed
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#EEF6FE',
        padding: '10px 0',
      }}
    >
      <Typography variant="subtitle1">{message}</Typography>
    </Box>
  );
};

export default InvoiceFooter;
