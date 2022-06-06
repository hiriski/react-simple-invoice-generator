import { FC, ReactNode } from 'react';

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
  return (
    <Typography
      variant="subtitle1"
      color="secondary"
      style={{ letterSpacing: '0.7px', marginBottom: editable ? 0.7 : createSpacing(0.7) }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
