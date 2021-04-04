import { addedItems, allQuantity } from "../helpers/cartHelpers"
import { types } from "../types/types"

export const refreshItems = () =>({
    type: types.refreshItems,
    payload: {
        items: JSON.parse(localStorage.getItem('items')),
        quantity: allQuantity()
    }
})

export const addQuantity = (item) => ({
    type: types.addItems,
    payload: {
        items: addedItems(item),
    }
})