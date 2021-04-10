export const getLastDate = (allProducts) =>{
    try{
      return allProducts[allProducts.length-1].date
    }
    catch (e){
        return "-"
    }
}