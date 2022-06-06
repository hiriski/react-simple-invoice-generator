import { ICompany } from './company';
import { IPerson } from './person';

export interface IInvoiceRecipient extends IPerson, ICompany {}

export interface IInvoiceSender extends IPerson, ICompany {}

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  rate: number;
  tax?: number;
  amount: number;
}

export interface IInvoice {
  fileName?: string;
  sender: IInvoiceSender;
  recipient: IInvoiceRecipient;
  invoiceNumber: string;
  date: string;
  due?: string;
  items: Array<InvoiceLineItem>;
  taxRate?: number;
  terms?: string;
  notes?: string;
  footerMessages?: string;
}
