import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from './screens/dashboard/AdminDashboard'
import AdminProductos from './screens/productos/AdminProductos'

import './../../css/index.css'


const AdminRouter = () => {
    return (
        <Switch >
            <Route path={"/admin/productos"} component={AdminProductos}/> 
            <Route path={"/admin"} component={AdminDashboard}/> 
            
        </Switch>
    )
}

export default AdminRouter
