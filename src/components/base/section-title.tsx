import { FC, ReactNode } from 'react';

// Mui components.
import MuiTypography from '@mui/material/Typography';

// Base components.
import { Typography } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils/theme';

interface Props {
  children: ReactNode;
}

const SectionTitle: FC<Props> = ({ children }) => {
  const { editable } = useGenerator();
  return editable ? (
    <MuiTypography
      variant="subtitle2"
      sx={{ color: 'text.disabled', letterSpacing: '0.7px', mb: 0.7, textTransform: 'uppercase', fontWeight: 'bold' }}
    >
      {children}
    </MuiTypography>
  ) : (
    <Typography
      variant="subtitle2"
      color="disabled"
      style={{
        letterSpacing: '0.7px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: editable ? 0.7 : createSpacing(0.7),
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
