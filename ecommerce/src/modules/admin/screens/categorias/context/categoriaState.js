import React, {useReducer} from 'react'
import { getCategorias } from '../../../../../services/categoriasService'
import CategoriaContext from './categoriaContext'
import CategoriaReducer from './categoriaReducer'



const CategoriaState = (props) => {

    const [state, dispatch] = useReducer(CategoriaReducer , {
        categorias: []
    })

    const traerCategorias = async () => {
        const data = await getCategorias();
        console.log("data contex");
        console.log(data)
        dispatch ({
            type: "OBTENER_CATEGORIAS",
            data: data
        })
      };
    

    return (
        <CategoriaContext.Provider value={{
            categorias: state.categorias,
            traerCategorias
        }}>
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaState
