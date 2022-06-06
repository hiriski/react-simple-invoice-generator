import { IAddress } from './address';

export interface ICompany extends IAddress {
  companyName?: string;
  phone?: string;
  email?: string;
}
