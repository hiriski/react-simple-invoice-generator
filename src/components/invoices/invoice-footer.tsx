import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Hooks
import { useGenerator } from '@/hooks/useGenerator';
import palette from '@/config/theme/palette';

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

        backgroundColor: String(palette.primary?.main),
        padding: '10px 0',
      }}
    >
      <Typography variant="subtitle1" style={{ color: String(palette.primary?.contrastText) }}>
        {message}
      </Typography>
    </Box>
  );
};

export default InvoiceFooter;
