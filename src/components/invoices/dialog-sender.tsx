import { ChangeEvent, FC, useCallback, useState } from 'react';

// Base components.
import { BaseDialog } from '@/components/base';

// Hooks.
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { invoice_setDialogSender } from '@/store/invoice/invoice-actions';
import { Grid, TextField } from '@mui/material';
import { useInvoice } from '@/hooks';

// Interfaces.
import { IInvoiceSender } from '@/interfaces/invoice';

const DialogSender: FC = () => {
  const dispatch = useDispatch();
  const { updateSender, invoice } = useInvoice();
  const { invoice_openDialogSender: open } = useAppSelector((state) => state.invoice);

  const [sender, setSender] = useState<IInvoiceSender>(invoice.sender);

  /**
   * Handle close dialog.
   * @return {void}
   */
  const handleClose = (): void => {
    dispatch(invoice_setDialogSender(false));
  };

  /**
   * Handle input change.
   *
   * @param { ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSender({
      ...sender,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handle submit
   *
   */
  const handleSubmit = useCallback(() => {
    updateSender(sender);
    handleClose();
  }, [sender]);

  return (
    <BaseDialog
      maxWidth="md"
      disableCloseButton
      open={open}
      title="Invoice Sender"
      onClose={handleClose}
      onConfirm={handleSubmit}
      confirmButtonText="Save"
      paperStyles={{ width: 720 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={sender.companyName}
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
            value={sender.country}
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
            value={sender.phone}
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
            value={sender.email}
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
            value={sender.addressLine1}
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
            value={sender.addressLine2}
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
            value={sender.city}
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
            value={sender.state}
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
            value={sender.postalCode}
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

export default DialogSender;
