import { FC } from 'react';

// Base components.
import { Box, Typography } from '@/components/base';

// Utilities.
import { createSpacing } from '@/utils/theme';

// Interfaces.
import { useGenerator } from '@/hooks/useGenerator';

interface Props {
  terms: string;
}

const InvoiceTermAndConditions: FC<Props> = ({ terms }) => {
  const { editable } = useGenerator();
  return (
    <Box>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
        {'Terms & Conditions'}
      </Typography>
      <Typography variant="subtitle1">{terms}</Typography>
    </Box>
  );
};

export default InvoiceTermAndConditions;
