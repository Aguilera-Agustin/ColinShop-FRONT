import {types} from '../types/types'

const initialState = {
    allProducts: [],
    status: null,
    loading: true
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getUserProducts:
            return {
                ...state,
                allProducts: action.payload.products
            }
        case types.startUserLoading:
            return{
                ...state,
                loading: true,
                notFound: false
            }
        case types.endUserLoading:
            return{
                ...state,
                loading: false
            }
        
       
    
        default:
            return state;
    }
}


export default userReducer;