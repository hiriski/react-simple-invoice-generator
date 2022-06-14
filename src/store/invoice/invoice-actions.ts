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

// Union actions type.
export type InvoiceActions = ISetInvoice | ISetIInvoiceLineItem;

// Actions creator.
export const invoice_setInvoice = (payload: IInvoice): ISetInvoice => ({
  type: Types.invoice_SET_INVOICE,
  payload,
});

export const invoice_setInvoiceLineItem = (payload: IPayloadSetInvoiceLineItem): ISetIInvoiceLineItem => ({
  type: Types.invoice_SET_INVOICE_LINE_ITEM,
  payload,
});
