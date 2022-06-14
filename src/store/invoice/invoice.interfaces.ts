import { IInvoiceLineItem } from '@/interfaces/invoice';

export interface IPayloadSetInvoiceLineItem {
  index: number;
  property: keyof IInvoiceLineItem;
  value: string;
}
