import { invoice } from "../data/invoice";

export const getInovice = () => {
  // let total = 0;

  // invoice.items.forEach((item) => {
  //   total = total + item.price * item.quantity;
  // });

  // let total = calculateTotal(invoice.items);

  return invoice;
};

export const calculateTotal = (items = []) => {
  return items
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0);
};
