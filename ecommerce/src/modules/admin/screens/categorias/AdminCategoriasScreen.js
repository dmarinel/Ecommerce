import React ,{useContext} from 'react'
import CategoriaContext from './context/categoriaContext'



const AdminCategoriasScreen = () => {
    
   const {categorias, traerCategorias} = useContext(CategoriaContext)

//    traerCategorias()
   console.log("context cate");
   console.log(categorias);
    return (
        <div>
            <div>hola</div>
            {categorias.map((categoria)=>(
                <p>{categoria.categoria_nombre}</p>
            ))}
            
        </div>
    )
}

export default AdminCategoriasScreen
