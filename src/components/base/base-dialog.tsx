import { FC, forwardRef, ReactElement } from 'react';

// Mui components.
import Zoom, { ZoomProps } from '@mui/material/Zoom';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { DialogContent, DialogTitle, IconButton, SxProps } from '@mui/material';

// Mui icons.
import CloseIcon from '@mui/icons-material/Close';

// Transition component.
const Transition = forwardRef<unknown, ZoomProps>(
  (props, ref): ReactElement => <Zoom unmountOnExit ref={ref} {...props} />,
);

interface Props extends DialogProps {
  paperStyles: SxProps;
  title: string;
}

const BaseDialog: FC<Props> = (props) => {
  const { open, onClose, maxWidth, fullWidth, children, sx, paperStyles, title, ...rest } = props;
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
          width: { xs: '94%', md: 780 },
          ...paperStyles,
        },
      }}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      sx={{ ...sx }}
      {...rest}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        onClick={onClose as () => void}
        size="small"
        sx={{ position: 'absolute', top: (theme) => theme.spacing(2), right: (theme) => theme.spacing(2) }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
