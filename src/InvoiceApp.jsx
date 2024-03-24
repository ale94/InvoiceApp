import { useEffect, useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";
import { getInovice } from "./services/getInovice";

const invoiceInitital = {
  total: 0,
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};
export const InvoiceApp = () => {
  const [counter, setCounter] = useState(4);
  const [invoice, setInvoice] = useState(invoiceInitital);
  const [items, setItems] = useState([]);
  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { total, id, name, client, company } = invoice;
  const { product, price, quantity } = formItemsState;

  useEffect(() => {
    const data = getInovice();
    console.log(invoice);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    console.log("el precio cambio!");
  }, [price]);

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceItemsSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) {
      alert("Error el precio no es un numero");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Error la cantidad tiene que ser mayor a 0");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("Error la cantidad no es un numero");
      return;
    }

    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      },
    ]);
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container">
        <div className="card shadow my-3">
          <div className="card-header text-center">Ejemplo Factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />
            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={client} />
              </div>
              <div className="col">
                <CompanyView title="Datos de la empresa" company={company} />
              </div>
            </div>
            <ListItemView title="Productos de la factura" items={items} />
            <TotalView total={total} />
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control my-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control my-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control my-3"
                onChange={onInputChange}
              />
              <button type="submit" className="btn btn-primary">
                Nuevo Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
