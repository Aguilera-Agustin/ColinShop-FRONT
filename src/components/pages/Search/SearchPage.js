import { Container, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { initGetProducts } from '../../../actions/productsActions'
import { EachProduct } from './EachProduct'
import Skeleton from '@material-ui/lab/Skeleton';
import { EachSkullProduct } from './EachSkullProduct'


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

export const SearchPage = () => {
    const {word} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initGetProducts(word))
    }, [dispatch, word])
    const classes = useStyles()
    const [sortBy, setSortBy] = useState("")
    const products = useSelector(state => state.product.allProducts)
    const notFound = useSelector(state => state.product.notFound)
    const loading = useSelector(state => state.product.loading)
    const handleOnChange = (e)=>{
        setSortBy(e.target.value)
    }
    return (
        <>
                <Container className={classes.container}>
            <Grid container  spacing={3}>
                <Grid item md={3} xs={12}>
                    <Paper variant="outlined" elevation={0} className={classes.paper}>
                        <Typography variant="h5" color="textPrimary" noWrap={true}>{word}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">{loading?(<Skeleton width={80}/>):(`${products.length} results`)}</Typography>
                        <Divider className={classes.divider}/>
                        <FormControl className={classes.form}>
                            <InputLabel>Sort by</InputLabel>
                            <Select value={sortBy} onChange={handleOnChange} labelId="sort-by-label">
                                <MenuItem value={"priceUp"}>Price: Low to High</MenuItem>
                                <MenuItem value={"priceDown"}>Price: High to Low</MenuItem>
                                <MenuItem value={"name"}>Name</MenuItem>
                                <MenuItem value={"stock"}>Stock</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item md={9} xs={12}>
                    {
                        loading? (<><EachSkullProduct/><EachSkullProduct/></>) : (
                    <Paper className={classes.paper} variant="outlined" elevation={0}>
                            {!notFound? 
                                products.map(eachProduct=>(eachProduct.stock>1 && (<EachProduct key={eachProduct.idProduct} product={eachProduct}/>)))
                            :
                            <Typography>Product not found</Typography>
                            }
                    </Paper>
                        )
                    }
                </Grid>
            </Grid>
        </Container>
        </>
    )
}
