import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { MainRouter } from './routers/MainRouter'
import { store } from './store/store'
import theme from './themeConfig'

export const ColinShop = () => {
    return (
        <Provider store={store}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <MainRouter/>
            </ThemeProvider>
        </Provider>
    )
}
