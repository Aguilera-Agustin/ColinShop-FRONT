import { CssBaseline } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { MainRouter } from './routers/MainRouter'
import { store } from './store/store'

export const ColinShop = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <MainRouter/>
        </Provider>
    )
}
