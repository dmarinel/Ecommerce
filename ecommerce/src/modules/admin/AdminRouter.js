import React from "react";
import { Route, Switch } from "react-router-dom";

import "./../../css/index.css";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminCategoriasScreen from "./screens/categorias/AdminCategoriasScreen";
import CategoriaState from "./screens/categorias/context/categoriaState";

import AdminDashboardScreen from "./screens/dashboard/AdminDashboardScreen";
import AdminProductosScreen from "./screens/productos/screens/AdminProductosScreen";

const AdminRouter = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex">
        <AdminSidebar />
        <div id="page-container" className="w-100 bg-light-blue">
          <AdminHeader />
          <div className="container-fluid p-5">
            <CategoriaState>
            <Switch>
            <Route
                path={"/admin/categorias"}
                component={AdminCategoriasScreen}
              />
              <Route
                path={"/admin/productos"}
                component={AdminProductosScreen}
              />
              <Route path={"/admin"} component={AdminDashboardScreen} />
              
            </Switch>
            </CategoriaState>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRouter;
