import { FC, forwardRef, ReactElement, ReactNode } from 'react';

// Mui components.
import Zoom, { ZoomProps } from '@mui/material/Zoom';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { Box, DialogActions, DialogContent, DialogTitle, IconButton, SxProps } from '@mui/material';

// Mui icons.
import CloseIcon from '@mui/icons-material/Close';
import StyledButton from './styled-button';

// Transition component.
const Transition = forwardRef<unknown, ZoomProps>(
  (props, ref): ReactElement => <Zoom unmountOnExit ref={ref} {...props} />,
);

interface Props extends Omit<DialogProps, 'title'> {
  paperStyles?: SxProps;
  title: ReactNode;
  icon?: ReactNode;
  onConfirm: () => void;
  confirmButtonText?: string;
  disableCloseButton?: boolean;
  disableCancelButton?: boolean;
  cancelButtonText?: string;
}

const BaseDialog: FC<Props> = (props) => {
  const {
    sx,
    open,
    icon,
    title,
    onClose,
    children,
    paperStyles,
    onConfirm,
    confirmButtonText,
    disableCloseButton,
    disableCancelButton,
    cancelButtonText,
    ...rest
  } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      PaperProps={{
        elevation: 1,
        sx: {
          position: 'relative',
          m: 0,
          px: {
            xs: 6,
            md: 9,
          },
          py: {
            xs: 3,
            md: 6,
          },
          // p: {
          //   xs: (theme) => theme.spacing(4, 6),
          //   md: (theme) => theme.spacing(7, 9),
          // },
          ...paperStyles,
        },
      }}
      sx={{ ...sx }}
      {...rest}
    >
      {icon && <Box sx={{ py: 3, pb: 2, textAlign: 'center', mb: 1.5 }}>{icon}</Box>}
      <DialogTitle>{title}</DialogTitle>

      {!disableCloseButton && (
        <IconButton
          onClick={onClose as () => void}
          sx={{ position: 'absolute', top: (theme) => theme.spacing(2.6), right: (theme) => theme.spacing(3) }}
        >
          <CloseIcon sx={{ fontSize: 22 }} />
        </IconButton>
      )}
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        {!disableCancelButton && (
          <StyledButton onClick={onClose as () => void} disableHoverEffect color="dark" size="medium" variant="text">
            {cancelButtonText}
          </StyledButton>
        )}
        <StyledButton onClick={onConfirm} disableHoverEffect size="medium">
          {confirmButtonText}
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

BaseDialog.defaultProps = {
  disableCancelButton: false,
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Ok',
};

export default BaseDialog;
