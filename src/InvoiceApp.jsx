import { getInovice } from "./services/getInovice";

export const InvoiceApp = () => {
  const invoice = getInovice();

  return (
    <>
      <h1>Ejemplo Factura</h1>
      <ul>
        <li>Id: {invoice.id}</li>
        <li>Name: {invoice.name}</li>
      </ul>
    </>
  );
};
