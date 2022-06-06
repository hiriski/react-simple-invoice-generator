import { FC } from 'react';

// Mui components.
import { Paper, SxProps } from '@mui/material';

interface Props {
  sx?: SxProps;
}

const InvoiceSettings: FC<Props> = ({ sx }) => {
  return (
    <Paper
      sx={{
        flex: 1,
        width: '100%',
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      Invoice Settings
    </Paper>
  );
};

export default InvoiceSettings;
