import { Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    
    img:{
        width:'100%',
        height:'100%',
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

export const EachProduct = ({imgSource}) => {
    const classes = useStyles()
    return (
        <>
            <Grid container spacing={6}>
                <Grid item md={3}>
                    <img className={classes.img} src={imgSource}/>
                </Grid>
                <Grid item md={9} style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="h6">                    
                        AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler
                    </Typography>
                    <Divider/>
                    <Typography variant="subtitle">                    
                        AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">                    
                           Stock: 1
                    </Typography>
                    <div className={classes.detailsContainer}>
                        <Typography variant="h6">
                            $42.240
                        </Typography>
                        <Button variant="contained" disableElevation size="small" color="secondary">
                            ADD TO CART
                        </Button>
                    </div>
                </Grid>
            </Grid>
        <Divider className={classes.buttonDivider}/>
        </>
    )
}
