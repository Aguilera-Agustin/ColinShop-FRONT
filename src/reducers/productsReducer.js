import {types} from '../types/types'

const initialState = {
    allProducts: [],
    loading: false,
    notFound: false
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getProducts:
            return {
                ...state,
                allProducts: action.payload.products,
                notFound: false
            }
        case types.startLoading:
            return{
                ...state,
                loading: true,
                notFound: false
            }
        case types.endLoading:
            return{
                ...state,
                loading: false
            }
        
        case types.notFoundProducts:
            return{
                ...state,
                allProducts:[],
                notFound: true
            }
    
        default:
            return state;
    }
}


export default productReducer;