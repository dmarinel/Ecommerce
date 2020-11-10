import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const RoutePrivado = ({path, componente:Componente }) => {
    
    return (
        <Route path={path} component={Componente}/> 
    )
}

export default RoutePrivado
