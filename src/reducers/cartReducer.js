import { allQuantity } from '../helpers/cartHelpers'
import {types} from '../types/types'

const initialState = {
    items: JSON.parse(localStorage.getItem('items')),
    allItems: allQuantity()
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.refreshItems:
            return {
                ...state,
                items: action.payload.items,
                allItems: action.payload.quantity
            }
        case types.addItems:
            return {
                ...state,
                items: action.payload.items
            }
        case types.reduceItem:
            return {
                ...state,
                quantityItems: state.quantityItems-1
            }
    
        default:
            return state;
    }
}


export default cartReducer;