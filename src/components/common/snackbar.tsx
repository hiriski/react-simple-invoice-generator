import { FC, SyntheticEvent, useEffect } from 'react';

// Mui components.
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';

// Action creators.
import { app_resetAlert } from '@/store/app/app-actions';

// Hooks.
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store';

const Snackbar: FC = () => {
  const dispatch = useDispatch();

  // Alert state.
  const { autoHideDuration, show, severity, messages, variant } = useAppSelector((state) => state.app.alert);

  /**
   * Handle close alert.
   *
   * @param {SyntheticEvent | Event} e
   * @param {string} reason
   * @return { void | undefined } void
   */
  const handleClose = (e: SyntheticEvent | Event, reason?: string): void | undefined => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(app_resetAlert());
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => handleClose, autoHideDuration);
    }
  }, [show]);

  if (show)
    return (
      <MuiSnackbar open={show} autoHideDuration={autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} variant={variant || 'filled'} sx={{ width: '100%' }}>
          {messages}
        </Alert>
      </MuiSnackbar>
    );

  return null;
};

export default Snackbar;
