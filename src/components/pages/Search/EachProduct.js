import { Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { refreshItems } from '../../../actions/cartActions'
import { addItem } from '../../../helpers/cartHelpers'

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
    }
})

export const EachProduct = ({product}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleOnClick =() =>{
        addItem(product)
        dispatch(refreshItems())
    }
    return (
        <>
            <Grid container spacing={6}>
                <Grid item md={3}>
                    <img alt={product.name} src={product.img} className={classes.img}/>
                </Grid>
                <Grid item md={9} style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="h6">                    
                        {product.title}
                    </Typography>
                    <Divider/>
                    <Typography variant="subtitle1">                    
                        {product.description}
                    </Typography>
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
