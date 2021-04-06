import {types} from '../types/types'

const initialState = {
    items: [],
    allItems: 0,
    allMoney: 0
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.modifyQuantity:
            return {
                ...state,
                allItems: action.payload.numberOfItems
               
            }
        case types.modifyItems:
            return {
                ...state,
                items: action.payload.items
            }
        case types.addMoney:
            return {
                ...state,
                allMoney: state.allMoney+parseFloat(action.payload.mount)
               
            }
        case types.substractMoney:
            return {
                ...state,
                allMoney: state.allMoney-parseFloat(action.payload.mount)
               
            }
        case types.modifyMoney:
            return {
                ...state,
               
            }
    
        default:
            return state;
    }
}


export default cartReducer;