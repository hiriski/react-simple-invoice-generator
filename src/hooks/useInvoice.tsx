import { Dispatch, SetStateAction, useContext } from 'react';
import { IInvoiceContext, invoiceContext, initialInvoice } from '@/context/invoice-context';
import { IInvoice, IInvoiceLineItem } from '@/interfaces/invoice';
import { calculateAmount } from '@/utils/invoice';

interface UseInvoiceHookReturn extends IInvoiceContext {
  reset: () => void;
  handleChangeLineItem: (index: number, property: keyof IInvoiceLineItem, value: string) => void;
  append: (newLineItem: IInvoiceLineItem) => void;
  remove: (index: number) => void;
}

/**
 * useInvoice hook.
 *
 */
export const useInvoice = (): UseInvoiceHookReturn => {
  const { invoice, setInvoice } = useContext<IInvoiceContext>(invoiceContext);

  /**
   * Reset invoice state.
   *
   * @return {void}
   */
  const reset = (): void => setInvoice(initialInvoice);

  /**
   * Handle change invoice item.
   *
   * @param {number} index
   * @param {keyof IInvoiceLineItem | string} property
   * @param {string} value
   */
  const handleChangeLineItem = (index: number, property: keyof IInvoiceLineItem, value: string): void => {
    const { items } = invoice;

    const getAmount = (): string => {
      if (property === 'rate') {
        return calculateAmount(items[index].quantity, value);
      } else if (property === 'quantity') {
        return calculateAmount(value, items[index].rate);
      } else return items[index].amount;
    };

    const selectedItem = {
      ...items[index],
      [property]: value,
      amount: getAmount(),
    };

    const updateInvoiceItems = (
      items: Array<IInvoiceLineItem>,
      index: number,
      updatedItem: IInvoiceLineItem,
    ): Array<IInvoiceLineItem> => {
      return [
        ...items.slice(0, index), // everything before current items
        {
          ...items[index],
          ...updatedItem,
        },
        ...items.slice(index + 1), // everything after current items
      ];
    };

    setInvoice({ ...invoice, items: updateInvoiceItems(invoice.items, index, selectedItem) });
  };

  /**
   * Append new invoice line item
   *
   * @param {IInvoiceLineItem} newLineItem
   * @return { void }
   */
  const append = (newLineItem: IInvoiceLineItem): void => {
    const lineItems = invoice.items.concat(newLineItem);
    setInvoice({
      ...invoice,
      items: lineItems,
    });
  };

  /**
   * Remove invoice line item from list items.
   *
   * @param {number} index
   * @return { void }
   */
  const remove = (index: number): void => {
    const filteredItems = invoice.items.filter((item, itemIndex) => itemIndex !== index);
    setInvoice({
      ...invoice,
      items: filteredItems,
    });
  };

  return {
    invoice,
    setInvoice,
    reset,
    handleChangeLineItem,
    append,
    remove,
  };
};
