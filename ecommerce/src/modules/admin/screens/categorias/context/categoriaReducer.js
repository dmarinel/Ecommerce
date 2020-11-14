import CategoriaContext from "./categoriaContext"

const CategoriaReducer = (stateActual, action) => {

    switch(action.type){
        case "OBTENER_CATEGORIAS":
            // 
            return{
                ...stateActual,
                categorias: action.data
                
            }
    }
}

export default CategoriaReducer