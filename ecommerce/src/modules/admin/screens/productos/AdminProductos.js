import React from "react";
import { MdDashboard } from "react-icons/md";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import { FaUsers, FaStore, FaUserTie, FaThList} from "react-icons/fa";

const AdminProductos = () => {
  return (
    <div id="content-wrapper" className="d-flex">
      <div id="sidebar-container" className="bg-light border-right">
        <div className="logo">grafITi</div>
        <div className="menu list-group-flush">
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <MdDashboard className="menu--icon" />
            Dashboard
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <FaUserTie className="menu--icon" />
            Usuarios
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <FaUsers className="menu--icon" />
            Clientes
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <FaStore className="menu--icon" />
            Productos
          </a>
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <FaThList className="menu--icon" />
            Categorias
          </a>
        </div>
      </div>
      <div id="page-container" className="w-100 bg-light-blue">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <a className="navbar-brand" href="!#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  role="buttom"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MiNombre
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Mi perfil
                  </a>
                  <div className="dropdown-divider">
                    <a className="dropdown-item" href="#">
                      Cerrar sesion
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-5">
          <div className="row mb-3">
            <div className="col-12">
              <h5>Pedidos Recientes</h5>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>
                        <small className="font-weight-bold"> ID</small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Imagen
                        </small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Nombre
                        </small>
                      </th>
                      <th>
                        <small className="font-weight-bold">
                          Categoria
                        </small>
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
                      <th >
                        <small className="font-weight-bold">Precio</small>
                      </th>
                      <th colSpan="2">
                        <small className="font-weight-bold">Acciones</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="shadow-sm ">
                      <td className="align-middle">01</td>
                      <td className="align-middle">
                          <img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/tobefonseca/products/204847/shirt-1491664937-3145adf537241b99ed5ed18c1452bb5b.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzgxNC4yODU3MTQyODU3MTQyLCAxNDgzLjQyODU3MTQyODU3MTNdLCB7fV0sIFsiZW5jb2RlIiwgWyIucG5nIl0sIHsiZHBpIjogMzAwfV0sIFsicmVzaXplIiwgWzU3NV0sIHt9XSwgWyJvdmVybGF5IiwgWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9vdmVybGF5cy9jMmIwNThkMzE1YTJjODE1YjY1ZmQ0YTA3MWYyNTIyYi9mcm9udC0xNTY5NTI4NzI3LTM4OWE1Yjg5ZWEzMTQ2NDE1ODIwOTJjZTgxNjQ1NDg2LnBuZyJdLCB7InkiOiA0MDYsICJ4IjogNzAyLCAiYmFja2dyb3VuZCI6ICIzNTNmNGIifV0sIFsicmVzaXplIiwgW10sIHsid2lkdGgiOiAzNTAsICJzdHlsZSI6ICJDUk9QIiwgImhlaWdodCI6IDQyMH1dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ==" 
                          alt=""
                          width="80px"
                          className="img-fluid avatar"
                          />
                      </td>
                      <td className="align-middle">Corazon de primavara</td>
                      <td className="align-middle">Mujer</td>
                      <td className="align-middle">Polo</td>
                      <td className="align-middle">
                          amarillo, blanco **
                      </td>
                      <td className="align-middle">
                          xl, m, l **
                      </td>
                      <td className="align-middle">
                          s/ 25 
                      </td>
                      <td className=" align-middle ">
                        <a className="circle bg-primario rounded-circle d-flex align-self-center mr-3y  ">
                            <AiOutlineEdit className="text-primary lead align-self-center mx-auto"/>
                        </a>
                      </td>
                      <td className=" align-middle">
                      <a className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                            <AiOutlineDelete className="text-primary lead align-self-center mx-auto"/>
                        </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductos;
