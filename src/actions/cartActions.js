import { types } from "../types/types"
import compare from "../helpers/compare"
import axios from "axios"
import { buyProductForUser } from "./authActions"


export const addItemInCart = (newItem) =>{
    return (dispatch, getState) =>{
        const allItems = getState().cart.items
        const newQuantity = getState().cart.allItems+1
        const newAllItems = filterItemsToAdd(allItems, newItem)
        dispatch(modifyItems(newAllItems))
        dispatch(modifyQuantity(newQuantity))
        dispatch(addMoney(newItem))
    }
}

export const substractItemInCart = (myItem) =>{
    return(dispatch, getState) =>{
        const allItems = getState().cart.items
        if(myItem.quantity > 1){
            const newQuantity = getState().cart.allItems-1
            const newAllItems = reduceQuantityInItem(allItems, myItem)
            dispatch(modifyItems(newAllItems))
            dispatch(modifyQuantity(newQuantity))
            dispatch(substractMoney(myItem))
        }else{
            const filteredItems = allItems.filter(eachItem => eachItem.id !== myItem.id)
            const newQuantity = getState().cart.allItems-1
            dispatch(modifyItems(filteredItems))
            dispatch(modifyQuantity(newQuantity))
            dispatch(substractMoney(myItem))
        }
    }
}
const reduceQuantityInItem = (allItems, myItem) =>{
    let filteredItems = allItems.filter(eachItem => eachItem.id !== myItem.id)
    const newItem = myItem
    newItem.quantity = newItem.quantity-1
    filteredItems.push(newItem)
    filteredItems.sort(compare)
    return filteredItems
}

export const addMoney = (newItem) =>({
    type: types.addMoney,
    payload:{
        mount: newItem.price
    }
})
export const substractMoney = (newItem) =>({
    type: types.substractMoney,
    payload:{
        mount: newItem.price
    }
})


 const modifyItems = (allItems) =>({
    type: types.modifyItems,
    payload:{
        items: allItems
    }
})

 const modifyQuantity = (newQuantity) =>({
    type: types.modifyQuantity,
    payload:{
        numberOfItems: newQuantity
    }
})

const filterItemsToAdd = (allItems, newItem) =>{
    let existItem = allItems.filter(eachItem => eachItem.id === newItem.id)
    if(existItem.length > 0){
        let othersItems = allItems.filter(eachItem => eachItem.id !== newItem.id)
        existItem[0]['quantity'] = existItem[0].quantity+1
        othersItems.push(...existItem)
        othersItems.sort(compare)
        return othersItems
    }
    else{
        let items = allItems
        newItem.quantity=1
        items.push(newItem)
        items.sort(compare)
        return items
    }
}

export const clearActions = () =>({
    type: types.clearCart
})

export const buyProducts = (allProducts) =>{
    return (dispatch) =>{
       const ids = dispatch(prepareIds(allProducts))
       axios.put('https://colinshop.herokuapp.com/market/product/buy', ids)
       .then(res=>res.data&&dispatch(buyProductForUser(allProducts)))
       .catch(err=>console.log(err))
    }
}

const prepareIds = (allProducts) =>{
    return (dispatch) =>{
        const allIds = []
        allProducts.forEach(element => {
            if(!element.quantity > element.stock){
                for (let index = 0; index < element.quantity; index++) {
                    const requestData = {
                        idProduct : element.idProduct
                    }
                    allIds.push(requestData)
                }
            }
        });
        return(allIds)
    }

}