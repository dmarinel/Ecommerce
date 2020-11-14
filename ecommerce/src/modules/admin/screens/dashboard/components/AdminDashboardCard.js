import React from 'react'

import {BiPurchaseTagAlt} from "react-icons/bi"
import { FaUsers, FaTshirt, FaMoneyBill } from "react-icons/fa";

const AdminDashboardCard = () => {
    return (
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
    )
}

export default AdminDashboardCard
