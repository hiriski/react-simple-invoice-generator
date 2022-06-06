/**
 * Format rupiah.
 *
 * @param {number} num
 * @return {string}
 */
export const formatRupiah = (num: number): string => {
  const tempNum = String(num).split('').reverse();
  let rupiah = '';

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 == 0 && i != tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  rupiah = tempNum.reverse().join('');
  return rupiah;
};
