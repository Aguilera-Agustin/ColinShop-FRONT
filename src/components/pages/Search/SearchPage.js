import { Container, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import products from '../../../assets/exampleItems'
import { EachProduct } from './EachProduct'

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
    const classes = useStyles()
    const [sortBy, setSortBy] = useState("")
    const {word} = useParams()
    const handleOnChange = (e)=>{
        setSortBy(e.target.value)
    }
    return (
        <Container className={classes.container}>
            <Grid container  spacing={3}>
                <Grid item md={3} xs={12}>
                    <Paper variant="outlined" elevation={0} className={classes.paper}>
                        <Typography variant="h5" color="textPrimary" noWrap={true}>{word}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">36 results</Typography>
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
                    <Paper className={classes.paper} variant="outlined" elevation={0}>
                        {products.map(eachProduct=>((<EachProduct key={eachProduct.id} product={eachProduct}/>)))}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
