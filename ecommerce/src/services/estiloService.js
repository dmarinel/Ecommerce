import { URL_BACKEND } from "../environments/environments"

export const getEstilos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/estilo`)
    const data  = await peticion.json()
    return data
}