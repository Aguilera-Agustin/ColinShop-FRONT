import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productsReducer';
import userReducer from '../reducers/userReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
    auth: authReducer,
    user: userReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)