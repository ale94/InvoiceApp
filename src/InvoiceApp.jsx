import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { getInovice } from "./services/getInovice";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInovice();

  return (
    <>
      <div className="container">
        <div className="card shadow my-3">
          <div className="card-header">Ejemplo Factura</div>
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
          </div>
        </div>
      </div>
    </>
  );
};
