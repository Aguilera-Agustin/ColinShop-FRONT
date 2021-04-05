import compare from "./compare"

export const addItem = (item) =>{
    
    let allItems = JSON.parse(localStorage.getItem('items'))
    if(!allItems){
        const newItem = {
            ...item,
            quantity:1
        }
        localStorage.setItem('items',JSON.stringify([newItem]))
    }
    else{
        let existItem = allItems.filter((eachItem) => (eachItem.id === item.id ))
        if(existItem.length >0){
            let filteredArray = allItems.filter((secondBucle) => (secondBucle !== existItem[0] ))
            const numQuantity = existItem[0].quantity
            existItem[0]['quantity'] = numQuantity+1
            filteredArray.push(...existItem)
            filteredArray.sort(compare)
            localStorage.setItem('items', JSON.stringify([...filteredArray]))
        }
        else{
            const newItem = {
                ...item,
                quantity:1
            }
            localStorage.setItem('items',JSON.stringify([...allItems, newItem]))
        }
    }
}

export const allQuantity = () =>{
    const allItems = JSON.parse(localStorage.getItem('items'))
    if(allItems){
        
        let quantity = 0
        allItems.forEach(element => {
            quantity = quantity+element.quantity
        });
        return quantity
    }
    else{
        return 0
    }
}

export const addedItems = (item) => {
    const allItems = JSON.parse(localStorage.getItem('items'))
    if(allItems){
        let filteredArray = allItems.filter((secondBucle) => (secondBucle.id !== item.id ))
        const newItem = {
            ...item,
            quantity: item.quantity+1
        }        
        filteredArray.push(newItem)
        filteredArray.sort(compare)
        localStorage.setItem('items',JSON.stringify(filteredArray))
        return filteredArray
    }
    else{
        return null
    }
}

export const substractItems = (item) =>{
    const allItems = JSON.parse(localStorage.getItem('items'))
    if(allItems){
        let filteredArray = allItems.filter((secondBucle) => (secondBucle.id !== item.id ))
        const newItem = {
            ...item,
            quantity: item.quantity-1
        }        
        filteredArray.push(newItem)
        filteredArray.sort(compare)
        localStorage.setItem('items',JSON.stringify(filteredArray))
        return filteredArray
    }
    else{
        return null
    }
}

export const deleteOneItem = (item) =>{
    const allItems = JSON.parse(localStorage.getItem('items'))
    if(allItems){
        const filteredItems = allItems.filter((eachItem)=>(eachItem.id !== item.id))
        localStorage.setItem('items', JSON.stringify(filteredItems))
        return filteredItems
    }
}

