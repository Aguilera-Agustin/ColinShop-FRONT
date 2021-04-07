import { Button, Container, Divider, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginWithGoogle } from '../../../actions/authActions'
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
    },
    button:{
        marginTop:'1rem',
        width:'100%'
    }
})

export const CartPage = () => {
    const dispath  = useDispatch()
    const classes = useStyles()
    const allItems = useSelector(state=>state.cart.items)
    const price = useSelector(state=>state.cart.allMoney)
    const {user, loading} = useSelector(state=>state.auth)
    const handleOnLogin = () =>{
        dispath(startLoginWithGoogle())
    }
    return (
        <Container className={classes.container}>
        <Grid container  spacing={3}>
            <Grid item md={3} xs={12}>
                <Paper variant="outlined" elevation={0} className={classes.paper}>
                    <Typography variant="h5" color="textPrimary" noWrap={true}>Checkout</Typography>
                    <Divider className={classes.divider}/>
                    <Typography>Total: <b>${price}</b></Typography>
                    {
                        user? (
                            <Button className={classes.button} variant="contained" color="secondary">Buy</Button>
                        )
                        :
                        (
                            <Button className={classes.button} onClick={handleOnLogin} variant="contained" color="secondary" disabled={loading}>Log in</Button>
                        )
                    }
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
