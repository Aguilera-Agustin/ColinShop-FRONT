import {types} from '../types/types'

const initialState = {
    allProducts: [],
    loading: false
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getProducts:
            return {
                ...state,
                allProducts: action.payload.products
            }
        case types.startLoading:
            return{
                ...state,
                loading: true
            }
        case types.endLoading:
            return{
                ...state,
                loading: false
            }
       
    
        default:
            return state;
    }
}


export default productReducer;