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
            <Link to="/products" component={Button}>Products</Link>
            <Link to="/account" component={Button}>My Account</Link>
            <Link to="/sales" component={Button}>Hot Sale</Link>
            <Link to="/about" component={Button}>About</Link>
        </Paper>
    )
}
