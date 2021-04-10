import moment from "moment"
import { firebase, db } from "../firebase/firebaseConfig"
import { types } from "../types/types"
import { clearActions } from "./cartActions"

export const startLoginWithGoogle = () =>{
    return (dispatch)=>{
        dispatch(startLoading())
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const data = {
                uid: res.user.uid,
                name: res.user.displayName,
                photo: res.user.photoURL,
                email: res.user.email,
            }
            dispatch(login(data))
            dispatch(endLoading())
            dispatch(setNewCollection(data))
        })
        .catch(err=>{
            dispatch(setError(err.message))
            dispatch(endLoading())
        })
    }
}

const setError = (err) =>({
    type: types.authError,
    payload:{
        error: err
    }
})


const startLoading = () =>({
    type: types.startAuthLoading
})

const endLoading = () =>({
    type: types.endAuthLoading
})

const login = (data) => ({
    type: types.authLogin,
    payload:{
        user: data
    }
})

const setNewCollection = ({uid,email}) =>{
    return(dispatch) =>{
        db.collection("users").doc(uid).get()
        .then(eachUser => {
            const userData = eachUser.data()
            !userData && db.collection("users").doc(uid).set({email, products:[]}) 
        })
        .catch(err => console.log("ERROR"))
    }
}


export const buyProductForUser = (product) =>{
    return (dispath, getState) =>{
        const uid = getState().auth.user.uid
        db.collection('users').doc(uid).get()
        .then(myUser=>{
            let data = myUser.data()
            const currentDate = moment().format("DD-MM-YYYY")
            data.products.push(...product)
            product.map(eachProduct => (
                eachProduct.date = currentDate 
            ))
            db.collection("users").doc(uid).set(data)
            .then(secRes=> dispath(clearActions()))
            .catch(secErr => console.log(secErr))
        })
    }
}   
const logout = () =>({
    type: types.authLogout
}  )
export const startLogout = () =>{
    return(dispatch)=>{firebase.auth().signOut().then(()=>{
        dispatch(logout())
    })}
}