export const setTotalMount = (allProducts) =>{
    let totalMount = 0
    allProducts.forEach(eachProduct => {
        totalMount += (eachProduct.price*eachProduct.quantity)
    });
    return totalMount
}