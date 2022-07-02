export const calculateAmount = (quantity: string, rate: string): string => {
  const fQuantity = parseFloat(quantity);
  const rateNumber = parseFloat(rate);
  const amount = quantity && rateNumber ? fQuantity * rateNumber : 0;

  return amount.toFixed(2);
};
