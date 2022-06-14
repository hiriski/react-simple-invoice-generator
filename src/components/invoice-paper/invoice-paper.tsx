import { FC, ReactNode } from 'react';

// Mui components.
import { Paper, SxProps } from '@mui/material';

interface Props {
  children: ReactNode;
  sx?: SxProps;
}

// Page size.
const ACTUALLY_PAPER_SIZE: Record<string, string> = {
  width: '210mm',
  height: '297mm',
};

const InvoicePaper: FC<Props> = ({ children, sx }) => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', md: ACTUALLY_PAPER_SIZE.width },
        minHeight: { xs: 'unset', md: ACTUALLY_PAPER_SIZE.height },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default InvoicePaper;
