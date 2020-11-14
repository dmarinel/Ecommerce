import React from "react";


import AdminPedidoTable from "../pedidos/components/AdminPedidoTable";
import AdminDashboardCard from "./components/AdminDashboardCard";

const AdminDashboardScreen = () => {
  return (
    <>
      <AdminDashboardCard />
      <AdminPedidoTable />
    </>
  );
};

export default AdminDashboardScreen;
