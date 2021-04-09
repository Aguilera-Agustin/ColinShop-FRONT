import { Button, Container, Divider, Grid, List, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { CustomListItem } from './CustomListItem';
import { NoAuth } from './NoAuth';



const useStyles = makeStyles({
    container: {
        marginTop: '1rem'
    },
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
    }
})
export const AccountPage = () => {
    const classes = useStyles()
    const user = useSelector(state=>state.auth.user)
    return (
        <Container className={classes.container}>
            {
                user?
                    (
                        <Paper elevation={0}>
                            <Grid className={classes.grid} container>
                                <Grid item md={4} xs={12} >
                                    <div className={classes.profileInfoContainer}>
                                        <Avatar className={classes.logoAvatar} alt ={user.name} src={user.photo} />
                                        <Typography variant="h6">{user.name}</Typography>
                                        <Divider className={classes.divider}/>
                                    </div>
                                    <Typography className={classes.info}>Purshared Items : <b>30</b></Typography>
                                    <Typography className={classes.info}>Last purchase: <b>90/01/2021</b></Typography>
                                    <Typography className={classes.info}>Total mount: <b>$900</b></Typography>
                                    <div className={classes.profileInfoContainer}>
                                        <Button variant="outlined" style={{marginTop:'1rem', marginBottom:'3rem'}} color="primary">Logout</Button>
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography align="center" variant="h6">My items</Typography>
                                    <Divider/>  
                                    <List>
                                        <CustomListItem/>    
                                        <CustomListItem/>    
                                        <CustomListItem/>    
                                        <CustomListItem/>    
                                        <CustomListItem/>    
                                        <CustomListItem/>    
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                    :
                    (
                        <NoAuth/>
                    )
                
            }
            
        </Container>
    )
}
