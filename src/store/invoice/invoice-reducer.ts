// Invoice action types.
import { InvoiceActionTypes as Types } from './invoice-actions.enum';

// Initial invoice data.
import { initialInvoice } from '@/context';

// Union actions type.
import { InvoiceActions } from './invoice-actions';
import { IInvoice, IInvoiceLineItem } from '@/interfaces/invoice';

// Invoice state definition.
export interface IInvoiceState {
  invoice_isLoadingPreview: boolean;
  invoice_data: IInvoice;
}

// Init state.
const initialState: IInvoiceState = {
  invoice_isLoadingPreview: false,
  invoice_data: initialInvoice,
};

const updateInvoiceItems = (
  items: Array<IInvoiceLineItem>,
  index: number,
  updatedInv: IInvoiceLineItem,
): Array<IInvoiceLineItem> => {
  return [
    ...items.slice(0, index), // everything before current phrase
    {
      ...items[index],
      ...updatedInv,
    },
    ...items.slice(index + 1), // everything after current phrase
  ];
};

// Invoice state reducer.
const invoiceReducer = (state: IInvoiceState = initialState, { type, payload }: InvoiceActions): IInvoiceState => {
  switch (type) {
    case Types.invoice_SET_INVOICE:
      return {
        ...state,
        invoice_data: payload,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
