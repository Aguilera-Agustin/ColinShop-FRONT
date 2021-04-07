import { firebase } from "../firebase/firebaseConfig"
import { types } from "../types/types"

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