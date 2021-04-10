import { Button, Chip, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemInCart } from '../../../actions/cartActions'


const useStyles = makeStyles({
    img:{
        width:'100%',
        height:'100%'
      
    },
    detailsContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'2%'
    },
    buttonDivider:{
        margin:'1rem 0'
    },
    chip:{
        marginRight: '0.5rem'
    },
    chipContainer:{
        display:'flex',
        alignItems:'center'
    }
})

export const EachProduct = ({product}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleOnClick =() =>{
        dispatch(addItemInCart(product))
    }
    return (
        <>
            <Grid container spacing={6}>
                <Grid item md={3}>
                    <img alt={product.name} src={product.image} className={classes.img}/>
                </Grid>
                <Grid item md={9} style={{display:'flex', flexDirection:'column'}}>
                    <div className={classes.chipContainer}>
                        <Typography variant="h6">                    
                            <Chip size="small" className={classes.chip} color="primary" label={product.brand}/>                    
                            {product.name.toUpperCase()} 
                        </Typography>
                    </div>
                    
                    <Divider style={{marginTop:'0.5rem'}}/> 
                            
                         
                    <Typography color="textSecondary" variant="subtitle2">                    
                           Stock: {product.stock}
                    </Typography>
                    <div className={classes.detailsContainer}>
                        <Typography variant="h6">
                            ${product.price}
                        </Typography>
                        <Button variant="contained" onClick={handleOnClick} disableElevation size="small" color="secondary">
                            ADD TO CART
                        </Button>
                    </div>
                </Grid>
            </Grid>
        <Divider className={classes.buttonDivider}/>
        </>
    )
}
