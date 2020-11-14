import {URL_BACKEND} from '../environments/environments'

export const getProductos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/producto`)
    const data = await peticion.json()
    return data
}

export const postProductos = async (objProducto) => {
    const peticion = await fetch (`${URL_BACKEND}/producto`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(objProducto)
    })
    const data = await peticion.json()
    return data
}