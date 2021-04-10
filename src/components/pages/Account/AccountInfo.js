import React from 'react'
import { Button, Divider, Grid, List, makeStyles, Paper, Typography } from '@material-ui/core'
import { CustomListItem } from './CustomListItem';
import Avatar from '@material-ui/core/Avatar';
import { setTotalMount } from '../../../helpers/setTotalMount';
import {  useSelector, useDispatch} from 'react-redux';
import { getLastDate } from '../../../helpers/getDate';
import { startLogout } from '../../../actions/authActions';

const useStyles = makeStyles({
    grid:{
        padding:'1rem'
    },
    profileInfoContainer:{
        width:"100%",
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    },
    logoAvatar:{
        width:'8rem',
        height:'8rem',
        marginBottom:'1rem'
    },
    divider:{
        width:'90%',
        marginTop:'1rem',
        marginBottom:'1rem'
    },
    info:{
        marginBottom:'0.5rem'
    },
    paper:{
        padding:'1.3rem'
    }
})
export const AccountInfo = ({user}) => {
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.user.loading)
    const classes = useStyles()
    const allProducts = useSelector(state=>state.user.allProducts)
    const handleOnLogout = () =>{
        dispatch(startLogout())
    }
    return (
            <>
                <Grid container className={classes.grid} spacing={3} justify="center">
                    <Grid item md={4} xs={12} >
                    <Paper className={classes.paper} variant="outlined" elevation={0}>
                        <div className={classes.profileInfoContainer}>
                            <Avatar className={classes.logoAvatar} alt ={user.name} src={user.photo} />
                            <Typography variant="h6">{user.name}</Typography>
                            <Divider className={classes.divider}/>
                        </div>
                        {
                            !loading&&(
                                <>
                                <Typography className={classes.info}>Purshared Items : <b>{allProducts.length}</b></Typography>
                                <Typography className={classes.info}>Last purchase: <b>{getLastDate(allProducts)}</b></Typography>
                                <Typography className={classes.info}>Total mount: <b>${setTotalMount(allProducts)}</b></Typography>
                                </>
                                )
                            }
                        <div className={classes.profileInfoContainer}>
                            <Button variant="outlined" style={{marginTop:'1rem', marginBottom:'3rem'}} color="primary" onClick={handleOnLogout}>Logout</Button>
                        </div>
                            </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <Paper className={classes.paper} variant="outlined" elevation={0}>
                        <Typography align="center" variant="h6">My items</Typography>
                        <Divider/>  
                        {
                            !loading&&(
                                <List>
                                    {allProducts.map(eachProduct=><CustomListItem product={eachProduct}/>)}    
                                </List>
                            )
                        }
                        </Paper>
                    </Grid>
                </Grid>
            </>)
}
