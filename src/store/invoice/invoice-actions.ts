// Enum action types.
import { IInvoice } from '@/interfaces/invoice';
import { InvoiceActionTypes as Types } from './invoice-actions.enum';
import type { IPayloadSetInvoiceLineItem } from './invoice.interfaces';

// Actions definitions.
export interface ISetInvoice {
  type: typeof Types.invoice_SET_INVOICE;
  payload: IInvoice;
}

interface ISetIInvoiceLineItem {
  type: typeof Types.invoice_SET_INVOICE_LINE_ITEM;
  payload: IPayloadSetInvoiceLineItem;
}

interface ISetDialogEditRecipient {
  type: typeof Types.invoice_SET_DIALOG_RECIPIENT;
  payload: boolean;
}
interface ISetDialogSender {
  type: typeof Types.invoice_SET_DIALOG_SENDER;
  payload: boolean;
}

// Union actions type.
export type InvoiceActions = ISetInvoice | ISetIInvoiceLineItem | ISetDialogEditRecipient | ISetDialogSender;

// Actions creator.
export const invoice_setInvoice = (payload: IInvoice): ISetInvoice => ({
  type: Types.invoice_SET_INVOICE,
  payload,
});

export const invoice_setInvoiceLineItem = (payload: IPayloadSetInvoiceLineItem): ISetIInvoiceLineItem => ({
  type: Types.invoice_SET_INVOICE_LINE_ITEM,
  payload,
});

export const invoice_setDialogRecipient = (payload: boolean): ISetDialogEditRecipient => ({
  type: Types.invoice_SET_DIALOG_RECIPIENT,
  payload,
});

export const invoice_setDialogSender = (payload: boolean): ISetDialogSender => ({
  type: Types.invoice_SET_DIALOG_SENDER,
  payload,
});
