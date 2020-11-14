import React from 'react'

const AdminPedidoTable = () => {
    return (
        <div className="row mb-3">
            <div className="col-12">
              <h5>Pedidos Recientes</h5>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>
                        <small className="font-weight-bold">Order ID</small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Metodo de pago
                        </small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Fecha de orden
                        </small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Fecha de entrega
                        </small>
                      </th>
                      <th>
                        <small className="font-weight-bold">Estado</small>
                      </th>
                      <th>
                        <small className="font-weight-bold">Total</small>
                      </th>
                      <th>
                        <small className="font-weight-bold">Acciones</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shadow-sm ">
                      <td>10000000</td>
                      <td>Cash</td>
                      <td>11-02-2012</td>
                      <td>11-02-2012</td>
                      <td>
                        <span className="badge badge-primary text-primary">Activo</span>
                      </td>
                      <td>S/. 500</td>
                      <td>
                      <span className="badge badge-secondary ">Editar</span>
                      </td>
                    </tr>
                    <tr className="shadow-sm ">
                      <td>10000000</td>
                      <td>Cash</td>
                      <td>11-02-2012</td>
                      <td>11-02-2012</td>
                      <td>
                        <span className="badge badge-primary text-primary">Activo</span>
                      </td>
                      <td>S/. 500</td>
                      <td>
                      <span className="badge badge-secondary ">Editar</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    )
}

export default AdminPedidoTable
