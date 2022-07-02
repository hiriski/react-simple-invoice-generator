import { FC } from 'react';

// Mui components.
import { Paper, SxProps, Typography } from '@mui/material';

// Mui icons.
import ConstructionIcon from '@mui/icons-material/Construction';
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
        flexDirection: 'column',
        ...sx,
      }}
    >
      <ConstructionIcon sx={{ color: 'text.disabled', fontSize: 42, mb: 2 }} />
      <Typography sx={{ color: 'text.disabled', fontSize: 16 }}>Invoice Settings</Typography>
    </Paper>
  );
};

export default InvoiceSettings;
