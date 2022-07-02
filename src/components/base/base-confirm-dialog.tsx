import { FC, ReactNode } from 'react';

// Base components.
import { BaseDialog } from '@/components/base';

// Interfaces.
import { SxProps } from '@mui/material';

interface Props {
  open: boolean;
  title: string;
  icon?: ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
  sx?: SxProps;
}

const BaseConfirmDialog: FC<Props> = (props) => {
  const { open, onClose, title, children, icon, onConfirm, sx } = props;

  return (
    <BaseDialog icon={icon} open={open} title={title} onClose={onClose} onConfirm={onConfirm} sx={sx}>
      {children}
    </BaseDialog>
  );
};

export default BaseConfirmDialog;
