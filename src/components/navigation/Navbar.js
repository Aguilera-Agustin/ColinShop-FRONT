import { AppBar, Badge, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import SearchBar from "material-ui-search-bar";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    appBar:{
        padding:'0.5rem',
       
    }, 
    toolbar:{
        
    },
    search:{
        width:"100%",
        borderRadius:0,
    },
    logoContainer:{
        display:'flex',
        justifyContent:'flex-end'
    }
})

export const Navbar = () => {
    const history = useHistory()
    const cart = useSelector(state=>state.cart.allItems)
    const [searchValue, setSearchValue] = useState('')
    const classes = useStyles()
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(searchValue.length>0){
            history.push(`/search/${searchValue}`)
        }
        else{
            history.push('/')
        }
    }

    const handleOnChange = (e)=>{
        setSearchValue(e)
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>

            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container alignItems="center" alignItems="center">    
                    <Grid item md={2} xs={12}>
                        <Link to="/" style={{color:'white', textDecoration:'none'}}>
                            <Typography variant="h6">
                                ColinShop
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item md={8} xs={10}>
                    <SearchBar value={searchValue} onChange={e=>handleOnChange(e)} className={classes.search}/>
                    </Grid>
                    <Grid item md={2}  className={classes.logoContainer}>
                        <Link to="/cart">
                            <IconButton style={{color:'white'}}>
                                <Badge badgeContent={cart} color="secondary">
                                    <ShoppingCartIcon/>                  
                                </Badge>
                            </IconButton>
                        </Link>
                    </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </form>
    )
}
