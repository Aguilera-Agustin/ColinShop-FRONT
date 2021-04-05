import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {addQuantity, deleteItem, refreshItems, substractQuantity} from '../../../actions/cartActions'


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

export const EachCartProduct = ({product, allMoney, setAllMoney}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleOnAdd = () => {
        dispatch(addQuantity(product))
        dispatch(refreshItems())
    }
    const handleOnSubstract = () =>{
        if(product.quantity>1){
            dispatch(substractQuantity(product))
            dispatch(refreshItems())        
        }
        else{
            dispatch(deleteItem(product))
            dispatch(refreshItems())
        }
    }
    return (
             <>
            <Grid container spacing={6}>
                <Grid item md={3}>
                    <img src={product.img} alt={product.name} className={classes.img}/>
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
                           Quantity: {product.quantity}
                    </Typography>
                    <div className={classes.detailsContainer}>
                        <Typography variant="h6">
                            ${product.price}
                        </Typography>
                        <ButtonGroup disableElevation variant="outlined" color="primary">
                            <Button onClick={handleOnAdd}>+</Button>
                            <Button onClick={handleOnSubstract}>-</Button>
                        </ButtonGroup>
                         
                    </div>
                </Grid>
            </Grid>
        <Divider className={classes.buttonDivider}/>
        </>
    )
}