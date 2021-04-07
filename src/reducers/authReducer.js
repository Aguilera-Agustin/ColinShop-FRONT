import {types} from '../types/types'

const initialState = {
    user:null,
    loading: false,
    error: null
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.startAuthLoading:
            return {
                ...state,
                loading: true
            }
        case types.endAuthLoading:
            return {
                ...state,
                loading : false
            }
        case types.authLogin:
            return{
                ...state,
                user: action.payload.user,
                error: null
            }
        case types.authError:
            return{
                ...state,
                error: action.payload.error
            }
       
    
        default:
            return state;
    }
}


export default authReducer;