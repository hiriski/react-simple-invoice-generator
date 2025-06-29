import { FC, ReactNode } from 'react';

// Mui components.
import { Paper, SxProps } from '@mui/material';
import { INVOICE_PAPER_HEIGHT, INVOICE_PAPER_WIDTH } from '@/constants';

interface Props {
  children: ReactNode;
  sx?: SxProps;
}

const InvoicePaper: FC<Props> = ({ children, sx }) => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', md: INVOICE_PAPER_WIDTH },
        height: { xs: 'unset', md: INVOICE_PAPER_HEIGHT },
        borderRadius: 1,
        position: 'relative',
        '&::before': {
          content: '""',
          bottom: '30px',
          boxShadow: ' 0 31px 10px rgba(0, 0, 0, .6)',
          left: '20px',
          transform: 'rotate(-1deg)',
          background: 'transparent',
          height: '10px',
          position: 'absolute',
          width: '60%',
          zIndex: -1,
        },
        '&::after': {
          bottom: '50px',
          boxShadow: '0 47px 14px rgba(0, 0, 0, .5)',
          right: '-1px',
          transform: 'skew(2deg) rotate(3deg)',
          background: 'transparent',
          content: '""',
          height: '10px',
          position: 'absolute',
          width: '60%',
          zIndex: '-1',
        },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default InvoicePaper;
