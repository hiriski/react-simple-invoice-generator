import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

// Base components.
import { BaseDialog } from '@/components/base';

// Hooks.
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { invoice_setDialogRecipient } from '@/store/invoice/invoice-actions';
import { Grid, recomposeColor, TextField } from '@mui/material';
import { useInvoice } from '@/hooks';

// Interfaces.
import { IInvoiceRecipient } from '@/interfaces/invoice';

const DialogRecipient: FC = () => {
  const dispatch = useDispatch();
  const { updateRecipient, invoice } = useInvoice();
  const { invoice_openDialogRecipient: open } = useAppSelector((state) => state.invoice);

  const [recipient, setRecipient] = useState<IInvoiceRecipient>(invoice.recipient);

  /**
   * Handle close dialog.
   * @return {void}
   */
  const handleClose = (): void => {
    dispatch(invoice_setDialogRecipient(false));
  };

  /**
   * Handle input change.
   *
   * @param { ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRecipient({
      ...recipient,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle submit
   *
   */
  const handleSubmit = useCallback(() => {
    updateRecipient(recipient);
    handleClose();
  }, [recipient]);

  return (
    <BaseDialog
      maxWidth="md"
      disableCloseButton
      open={open}
      title="Invoice Recipient"
      onClose={handleClose}
      onConfirm={handleSubmit}
      confirmButtonText="Save Recipient"
      paperStyles={{ width: 720 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={recipient.companyName}
            onChange={handleChange}
            size="small"
            margin="none"
            name="companyName"
            label="Company Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={recipient.country}
            onChange={handleChange}
            size="small"
            margin="none"
            name="country"
            label="Country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={recipient.phone}
            onChange={handleChange}
            size="small"
            margin="none"
            name="phone"
            label="Phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={recipient.email}
            onChange={handleChange}
            size="small"
            margin="none"
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            multiline
            fullWidth
            value={recipient.addressLine1}
            onChange={handleChange}
            rows={2}
            size="small"
            margin="none"
            name="addressLine1"
            label="Address Line 1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            multiline
            fullWidth
            value={recipient.addressLine2}
            onChange={handleChange}
            rows={2}
            size="small"
            margin="none"
            name="addressLine2"
            label="Address Line 2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            value={recipient.city}
            onChange={handleChange}
            size="small"
            margin="none"
            name="city"
            label="City"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            value={recipient.state}
            onChange={handleChange}
            size="small"
            margin="none"
            name="state"
            label="State"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            value={recipient.postalCode}
            onChange={handleChange}
            size="small"
            margin="none"
            name="postalCode"
            label="Zip/Postal Code"
          />
        </Grid>
      </Grid>
    </BaseDialog>
  );
};

export default DialogRecipient;
