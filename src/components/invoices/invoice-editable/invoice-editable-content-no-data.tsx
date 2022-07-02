import { FC, ReactNode } from 'react';

// Mui components.
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
  subtitle?: string;
  icon: ReactNode;
}

const InvoiceEditableContentNoData: FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <Box
      className="invoice-editable-content-no-data"
      sx={{ height: 72, display: 'flex', alignItems: 'center', opacity: 0.5 }}
    >
      <Box sx={{ mr: 2, '& svg': { fontSize: 32 } }}>{icon}</Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontSize: 17, height: 24, overflow: 'hidden' }}>{title}</Typography>
        {subtitle && (
          <Typography variant="subtitle1" sx={{ maxHeight: 24, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default InvoiceEditableContentNoData;
