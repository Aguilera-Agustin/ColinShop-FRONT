import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import SearchBar from "material-ui-search-bar";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    appBar:{
        padding:'0.5rem',
       
    }, 
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
    },
    search:{
        width:"60%",
        borderRadius:0,
    },
    iconGroup:{
        display:'flex', 
        alignItems:'center', 
        backgroundColor:'red',
      
    }
})

export const Navbar = () => {
    const history = useHistory()
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
                    <Typography variant="h6">
                        ColinShop
                    </Typography>
                    <SearchBar  value={searchValue} onChange={e=>handleOnChange(e)} className={classes.search}/>
                        <ShoppingCartIcon/>                  
                </Toolbar>
            </AppBar>
        </form>
    )
}
