import { Skeleton } from '@material-ui/lab'
import React from 'react'
import {  Divider, Grid, makeStyles, Typography } from '@material-ui/core'

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


export const EachSkullProduct = () => {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={6}>
                <Grid item md={3}>
                    <Skeleton variant="rect" width={210} height={200}/>
                </Grid>
                <Grid item md={9} style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="h6">                    
                        <Skeleton/>
                    </Typography>
                    <Divider/>
                    <Typography variant="subtitle1">                    
                        <Skeleton/>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">                    
                           <Skeleton width={100}/>
                    </Typography>
                    <div className={classes.detailsContainer}>
                        <Typography variant="h6">
                            <Skeleton width={100}/>
                        </Typography>                       
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
