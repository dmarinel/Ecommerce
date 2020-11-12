import React from "react";
import { MdDashboard } from "react-icons/md";
import {BiPurchaseTagAlt} from "react-icons/bi"
import { FaUsers, FaStore, FaUserTie, FaThList, FaTshirt, FaMoneyBill } from "react-icons/fa";

const AdminDashboard = () => {
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
          <section className="py-3 mb-3">
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card border-0 shadow-card shadow-hover">
                  <div className="card-body d-flex">
                    <div className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                      <FaTshirt className="text-primary lead align-self-center mx-auto" />
                    </div>
                    <div>
                      <h5 className="mb-0">300</h5>
                      <small className="text-muted">Cantidad de productos</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card border-0 shadow-card shadow-hover">
                  <div className="card-body d-flex">
                    <div className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                      <FaUsers className="text-primary lead align-self-center mx-auto" />
                    </div>
                    <div>
                      <h5 className="mb-0">20</h5>
                      <small className="text-muted">Clientes</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card border-0 shadow-card shadow-hover">
                  <div className="card-body d-flex">
                    <div className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                      <BiPurchaseTagAlt className="text-primary lead align-self-center mx-auto" />
                    </div>
                    <div>
                      <h5 className="mb-0">3200</h5>
                      <small className="text-muted">Pedidos</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card border-0 shadow-card shadow-hover">
                  <div className="card-body d-flex">
                    <div className="circle bg-primario rounded-circle d-flex align-self-center mr-3">
                      <FaMoneyBill className="text-primary lead align-self-center mx-auto" />
                    </div>
                    <div>
                      <h5 className="mb-0">S/. 3200</h5>
                      <small className="text-muted">Ingresos</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row mb-3">
            <div className="col-xl-7 col-lg-12">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
