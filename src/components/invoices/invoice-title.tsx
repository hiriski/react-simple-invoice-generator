import { FC } from 'react';

// Base components.
import { Typography, Box } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

interface Props {
  title: string;
}

const InvoiceTitle: FC<Props> = ({ title }) => {
  const { editable } = useGenerator();
  return (
    <Box style={{ width: '100%', marginBottom: editable ? '16px' : '12px' }}>
      <Typography variant="h2" style={{ fontWeight: 700, lineHeight: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default InvoiceTitle;
