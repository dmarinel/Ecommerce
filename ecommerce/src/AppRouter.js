import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AdminRouter from './modules/admin/AdminRouter'
import AuthRouter from './modules/auth/AuthRouter'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/admin'} component={AdminRouter}/>
                <Route path={'/auth'} component={AuthRouter}/>
                {/* <Route path={'/'} component={AdminRouter}/> */}
            </Switch>
        </Router>
    )
}

export default AppRouter
