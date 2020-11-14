import React from "react";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const AdminProductoTable = ({productos}) => {
  return (
    <div className="row mb-3">
      <div className="col-12">
        <h5>Lista de Productos</h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>
                  <small className="font-weight-bold"> ID</small>
                </th>
                <th>
                  <small className="font-weight-bold">Imagen</small>
                </th>
                <th>
                  <small className="font-weight-bold">Nombre</small>
                </th>
                <th>
                  <small className="font-weight-bold">Categoria</small>
                </th>
                <th>
                  <small className="font-weight-bold">Estilos</small>
                </th>
                <th>
                  <small className="font-weight-bold">Colores</small>
                </th>
                <th>
                  <small className="font-weight-bold">Tallas</small>
                </th>
                <th>
                  <small className="font-weight-bold">Precio</small>
                </th>
                <th colSpan="2">
                  <small className="font-weight-bold">Acciones</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                productos.map((producto) => (
                  <tr className="shadow-sm " key={producto.prod_id}>
                <td className="align-middle">{producto.prod_id}</td>
                <td className="align-middle">
                  <img
                    src={producto.prod_img}
                    alt=""
                    width="80px"
                    className="img-fluid avatar"
                  />
                </td>
                <td className="align-middle">{producto.prod_nombre}</td>
                <td className="align-middle">Mujer</td>
                <td className="align-middle">Polo</td>
                <td className="align-middle">amarillo, blanco **</td>
                <td className="align-middle">xl, m, l **</td>
                <td className="align-middle">s/ {producto.prod_precio}</td>
                <td className=" align-middle ">
                  <a className="circle bg-primario rounded-circle d-flex align-self-center mr-3y  ">
                    <AiOutlineEdit className="text-primary lead align-self-center mx-auto" />
                  </a>
                </td>
                <td className=" align-middle">
                  <a className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                    <AiOutlineDelete className="text-primary lead align-self-center mx-auto" />
                  </a>
                </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductoTable;
