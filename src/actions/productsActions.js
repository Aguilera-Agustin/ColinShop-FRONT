import { types } from "../types/types"
import products from "../assets/exampleItems"

export const initGetProducts = () =>{
    return (dispatch) =>{
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(getProducts(products))
            dispatch(endLoading())
        }, 3000);
    }
}


const getProducts = (products) =>({
    type: types.getProducts,
    payload:{
        products
    }
})

const startLoading = () =>({
    type: types.startLoading
})

const endLoading = () => ({
    type: types.endLoading
})
