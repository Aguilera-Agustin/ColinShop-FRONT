import {db} from '../firebase/firebaseConfig'
import { types } from '../types/types'

export const getUserProductsFromGoogle = () =>{
    return (dispatch, getState) =>{
        const loadingAuth = getState().auth.loading
        if(!loadingAuth){
            dispatch(startLoading())
            const uid = getState().auth.user.uid
            db.collection("users").doc(uid).get()
            .then(res=>{
                try{
                    const products = res.data().products
                    dispatch(getUserProducts(products))
                    dispatch(endLoading())
                }
                catch(e){
                    dispatch(getUserProducts([]))
                    dispatch(endLoading())
                }
            })
        }
    }
}

const startLoading = () =>({
    type: types.startUserLoading
})
const endLoading = () =>({
    type: types.endUserLoading
})

const getUserProducts = (products) => ({
    type: types.getUserProducts,
    payload: {
        products
    }
})