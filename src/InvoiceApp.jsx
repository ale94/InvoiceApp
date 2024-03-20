import { useState } from "react";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";
import { getInovice } from "./services/getInovice";

export const InvoiceApp = () => {
  const { total, id, name, client, company, items: data } = getInovice();

  const [productValue, setProductValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  const [items, setItems] = useState(data);
  const [counter, setCounter] = useState(4);

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
            <form
              className="w-50"
              onSubmit={(event) => {
                event.preventDefault();

                if (productValue.trim().length <= 1) return;
                if (priceValue.trim().length <= 1) return;
                if (isNaN(priceValue.trim())) {
                  alert("Error el precio no es un numero");
                  return;
                }
                if (quantityValue.trim().length < 1) {
                  alert("Error la cantidad tiene que ser mayor a 0");
                  return;
                }
                if (isNaN(quantityValue.trim())) {
                  alert("Error la cantidad no es un numero");
                  return;
                }

                setItems([
                  ...items,
                  {
                    id: counter,
                    product: productValue.trim(),
                    price: +priceValue.trim(),
                    quantity: +quantityValue.trim(),
                  },
                ]);
                setProductValue("");
                setPriceValue("");
                setQuantityValue("");
                setCounter(counter + 1);
              }}
            >
              <input
                type="text"
                name="product"
                value={productValue}
                placeholder="Producto"
                className="form-control my-3"
                onChange={(event) => {
                  setProductValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="price"
                value={priceValue}
                placeholder="Precio"
                className="form-control my-3"
                onChange={(event) => {
                  setPriceValue(event.target.value);
                }}
              />
              <input
                type="text"
                name="quantity"
                value={quantityValue}
                placeholder="Cantidad"
                className="form-control my-3"
                onChange={(event) => {
                  setQuantityValue(event.target.value);
                }}
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
