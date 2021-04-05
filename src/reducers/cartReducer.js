import { allQuantity } from '../helpers/cartHelpers'
import {types} from '../types/types'

const initialState = {
    items: JSON.parse(localStorage.getItem('items')),
    allItems: allQuantity(),
    allMoney: 0
}

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.refreshItems:
            return {
                ...state,
                items: action.payload.items,
                allItems: action.payload.quantity,
            }
        case types.addItems:
            return {
                ...state,
                items: action.payload.items
            }
        case types.substractItems:
            return {
                ...state,
                items: action.payload.items
            }
        case types.deleteItem:
            return {
                ...state,
                items: action.payload.items
            }
        case types.modifyMoney:
            console.log(action.payload)
            return {
                ...state,
                money: action.payload.money
            }
    
        default:
            return state;
    }
}


export default cartReducer;