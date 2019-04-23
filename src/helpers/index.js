import { MAX_TO_GET_DISCOUNT } from '../constants';

// stack overflow
export const groupByItem = arr => {
  return arr.reduce((acc, val) => {
    const index = acc.findIndex(item => item.title === val.title);
    return (
      index === -1 ? acc.push({ times: 1, ...val }) : acc[index].times++, acc
    );
  }, []);
};

export const addItems = (numberOfItems, price, total) => {
  for (let i = 0; i < numberOfItems; i++) {
    total += price;
  }
  return total;
};

export const sumTotal = (a, b) => a + b;

export const hasBulkPromotion = (promotion, times) => {
  return promotion === 'bulk-purchases' && times >= MAX_TO_GET_DISCOUNT;
};

export const hasBOGOF = promotion => {
  return promotion === '2x1';
};
