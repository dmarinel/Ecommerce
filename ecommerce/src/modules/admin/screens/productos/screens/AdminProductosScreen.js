import React, { useEffect, useState } from "react";
import { getProductos } from "../../../../../services/productosService";

import AdminProductoForm from "../components/AdminProductoForm";
import AdminProductoTable from "../components/AdminProductoTable";

const AdminProductosScreen = () => {

 const [productos, setProductos] = useState([])

  const traerProductos = async () => {
    const data = await getProductos()
    // console.log(data);
    setProductos(data)

  }


  useEffect ( () => {
    traerProductos()
  },[])

  return (
      <div id="page-container" className="w-100 bg-light-blue">
        <div className="container ">
          <AdminProductoForm traerProductos={traerProductos} />
        </div>
        <div className="container-fluid mt-5">
          <AdminProductoTable productos={productos}/>
        </div>
      </div>
    
  );
};

export default AdminProductosScreen;
