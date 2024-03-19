import { invoice } from "../data/invoice";

export const getInovice = () => {
  // let total = 0;

  // invoice.items.forEach((item) => {
  //   total = total + item.price * item.quantity;
  // });

  let total = invoice.items
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0);

  return { ...invoice, total };
};
