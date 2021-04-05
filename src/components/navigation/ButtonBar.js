import { Button, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    bar:{
        height:'2.5rem',
        padding:'0.3rem',
        borderRadius:0,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
})
export const ButtonBar = () => {
    const classes = useStyles()
    
    return (
        <Paper className={classes.bar} variant="outlined" elevation={0}>
            <Button component={Link} to="/products">Products</Button>
            <Button component={Link} to="/account" >My Account</Button>
            <Button component={Link} to="/sales" >Hot Sale</Button>
            <Button component={Link} to="/about" >About</Button>
        </Paper>
    )
}
