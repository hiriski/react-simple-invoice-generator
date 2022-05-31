import { FC } from 'react';

// Mui components.
import { Paper } from '@mui/material';

const InvoiceSettings: FC = () => {
  return (
    <Paper
      sx={{
        flex: 1,
        width: '100%',
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Invoice Settings
    </Paper>
  );
};

export default InvoiceSettings;
