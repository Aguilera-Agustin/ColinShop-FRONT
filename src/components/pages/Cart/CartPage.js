import { Container, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { EachCartProduct } from './EachCartProduct'


const useStyles = makeStyles({
    container:{
        marginTop:'2rem'
    },
    form:{
        width:'70%'
    },
    divider:{
        margin:'0.5rem 0',
        width:'90%'
    },
    paper:{
        padding:'1.5rem'
    }
})

export const CartPage = () => {
    const classes = useStyles()
    const allItems = useSelector(state=>state.cart.items)

    return (
        <Container className={classes.container}>
        <Grid container  spacing={3}>
            <Grid item md={3} xs={12}>
                <Paper variant="outlined" elevation={0} className={classes.paper}>
                    <Typography variant="h5" color="textPrimary" noWrap={true}>Checkout</Typography>
                    <Divider className={classes.divider}/>
                    <Typography>Total: <b>$0</b></Typography>
                </Paper>
            </Grid>
            <Grid item md={9} xs={12}>
                <Paper className={classes.paper} variant="outlined" elevation={0}>
                    {allItems.map(eachProduct=>((<EachCartProduct key={eachProduct.id} product={eachProduct}/>)))}
                </Paper>
            </Grid>
        </Grid>
    </Container>
    )
}
