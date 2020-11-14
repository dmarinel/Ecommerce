import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getEstilos } from "../../../../../services/estiloService";
import { postProductos } from "../../../../../services/productosService";
import CategoriaContext from "../../categorias/context/categoriaContext";

const formularioVacio = {
  prod_nombre: "",
  prod_precio: 0,
  prod_descripcion: "",
  prod_img: "",
  estilo_id: 0,
};

const AdminProductoForm = ({ traerProductos }) => {
  const {categorias, traerCategorias} = useContext(CategoriaContext)
   
  const [formulario, setFormulario] = useState(formularioVacio);
  const [estilos, setEstilo] = useState([]);
  const [estilosF, setEstiloF] = useState([]);

 
  const traerEstilos = async () => {
    const data = await getEstilos();
    // console.log(data);
    setEstilo(data);
  };

  const TraerEstilosbyCategoriaId = async( id ) => {
    const estilosF = estilos.filter((est)=>{
      if(id === est.categoria_id){
        return est
      }
    })
   setEstiloF(estilosF)
  };

 

  useEffect(() => {
    traerCategorias()
    traerEstilos();
    TraerEstilosbyCategoriaId(1);
  }, []);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Espere ...",
      text: "Estamos subiendo la información al servidor",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    postProductos(formulario).then((data) => {
      if (data.prod_id) {
        traerProductos();
        setFormulario(formularioVacio);

        Swal.fire({
          title: "Hecho!",
          icon: "success",
          text: "El producto fue creado con éxito",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <form
      className="form-group shadow-sm p-3 bg-white rounded"
      onSubmit={onSubmit}
    >
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">Nombre de producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre de producto"
            value={formulario.prod_nombre}
            name="prod_nombre"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="">Categoria</label>
          <select name="categoria_id" className="form-control" >
            <option value="0">Seleccionar una Categoria</option>
            {categorias.map((categoria) => (
              <option value={categoria.categoria_id} key={categoria.categoria_id} >
                {categoria.categoria_nombre}
              </option>
            ))
            }
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="">Precio por unidad</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese precio por unidad"
            value={formulario.prod_precio}
            name="prod_precio"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group ">
          <label>Estilos</label>
          <select
            className="form-control"
            name="estilo_id"
            value={formulario.estilo_id}
            onChange={handleChange}
          >
            <option value="0">--Seleccionar un Estilo--</option>
            {/* {estilos.map((estilo) => (
              <option value={estilo.estilo_id} key={estilo.estilo_id}>
                {estilo.estilo_nombre}
              </option>
            ))} */}
            {estilosF.map((estilo)=>(
            <option value={estilo.estilo_id} key={estilo.estilo_id}>{estilo.estilo_nombre}</option>
            ))
            }
          </select>
        </div>
        <div className="col-md-6 form-group ">
          <label htmlFor="">Seleccione las tallas para este modelo</label>
          <div className="form-control d-flex">
            <div className="form-check mr-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="">S</label>
            </div>
            <div className="form-check mr-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="">M</label>
            </div>
            <div className="form-check mr-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="">L</label>
            </div>
            <div className="form-check mr-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="">XL</label>
            </div>
            <div className="form-check mr-2">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="">2XL</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="">Imagen de polo</label>
          <input
            type="text"
            className="form-control "
            placeholder="Ingrese URL de imagen"
            value={formulario.prod_img}
            name="prod_img"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-md-12 boton">
        <button type="submit" className="btn btn-primary shadow">
          Crear Producto
        </button>
        <button className="btn btn-danger ml-3 shadow">Cancelar</button>
      </div>
    </form>
  );
};

export default AdminProductoForm;
