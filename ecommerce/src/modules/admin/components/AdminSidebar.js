import React from 'react'

import { MdDashboard } from "react-icons/md";
import { FaUsers, FaStore, FaUserTie, FaThList, FaTshirt, FaMoneyBill } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div id="sidebar-container" className="bg-light border-right">
        <div className="logo">grafITi</div>
        <div className="menu list-group-flush">
          <Link
            className="list-group-item list-group-item-action bg-light p-3 border-0"
            to="/admin"
          >
            <MdDashboard className="menu--icon" />
            Dashboard
          </Link>
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
          <Link
            className="list-group-item list-group-item-action bg-light p-3 border-0"
            to="/admin/productos"
          >
            <FaStore className="menu--icon" />
            Productos
          </Link>
          <a
            href=""
            className="list-group-item list-group-item-action bg-light p-3 border-0"
          >
            <FaThList className="menu--icon" />
            Categorias
          </a>
        </div>
      </div>
    )
}

export default AdminSidebar
