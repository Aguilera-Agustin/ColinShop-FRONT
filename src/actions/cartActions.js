import { addedItems, allQuantity, substractItems, deleteOneItem} from "../helpers/cartHelpers"
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

export const substractQuantity = (item) =>({
    type: types.substractItems,
    payload:{
        items: substractItems(item)
    }
})

export const deleteItem = (item) =>({
    type: types.deleteItem,
    payload:{
        items: deleteOneItem(item)
    }
})

export const modifyMoney = (money) =>({
    type: types.modifyMoney,
    payload: {
        money
    }
})