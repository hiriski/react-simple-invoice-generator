import { ICompany } from './company';
import { IPerson } from './person';

export interface IInvoiceRecipient extends IPerson, ICompany {}

export interface IInvoiceSender extends IPerson, ICompany {}

export interface IInvoiceLineItem {
  description: string;
  quantity: string;
  rate: string;
  tax?: string;
}

export interface IInvoicePaymentInfo {
  accountName?: string;
  accountNumber?: string;
  bankAccount?: string;
}

export interface IInvoice {
  fileName?: string;
  logo?: string;
  sender: IInvoiceSender;
  recipient: IInvoiceRecipient;
  invoiceNumber: string;
  date: string;
  due?: string;
  items: Array<IInvoiceLineItem>;
  taxRate?: number;
  terms?: string;
  notes?: string;
  footerMessages?: string;
  paymentInfo?: IInvoicePaymentInfo;
}
