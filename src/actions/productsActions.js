import { types } from "../types/types"
import axios from "axios"

export const initGetProducts = (productName) =>{
    return (dispatch) =>{
        dispatch(startLoading())
        dispatch(getProductsFromApi(productName))
        dispatch(endLoading())
        
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


export const getProductsFromApi = (myName) =>{
    return(dispatch)=>{
        axios.get(`https://colinshop.herokuapp.com/market/product/name/${myName}`)
        .then(res=>dispatch(getProducts(res.data)))
        .catch(err => console.log(err.code))
    }
}