export const calculateAmount = (argQuantity: string, rate: string): string => {
  const quantity = parseFloat(argQuantity);
  const rateNumber = parseFloat(rate);
  const amount = quantity && rateNumber ? quantity * rateNumber : 0;

  return amount.toFixed(2);
};
