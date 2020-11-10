import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from './screens/dashboard/AdminDashboard'

const AdminRouter = () => {
    return (
        <Switch >
            <Route path={"/admin"} component={AdminDashboard}/> 
        </Switch>
    )
}

export default AdminRouter
