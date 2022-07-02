// Invoice action types.
import { InvoiceActionTypes as Types } from './invoice-actions.enum';

// Initial invoice data.
import { initialInvoiceData } from '@/context';

// Union actions type.
import { InvoiceActions } from './invoice-actions';
import { IInvoice } from '@/interfaces/invoice';

// Invoice state definition.
export interface IInvoiceState {
  invoice_isLoadingPreview: boolean;
  invoice_data: IInvoice;
  invoice_openDialogRecipient: boolean;
  invoice_openDialogSender: boolean;
}

// Init state.
const initialState: IInvoiceState = {
  invoice_isLoadingPreview: false,
  invoice_data: initialInvoiceData,
  invoice_openDialogRecipient: false,
  invoice_openDialogSender: false,
};

// Invoice state reducer.
const invoiceReducer = (state: IInvoiceState = initialState, { type, payload }: InvoiceActions): IInvoiceState => {
  switch (type) {
    case Types.invoice_SET_INVOICE:
      return {
        ...state,
        invoice_data: payload,
      };
    case Types.invoice_SET_DIALOG_RECIPIENT:
      return {
        ...state,
        invoice_openDialogRecipient: payload,
      };
    case Types.invoice_SET_DIALOG_SENDER:
      return {
        ...state,
        invoice_openDialogSender: payload,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
