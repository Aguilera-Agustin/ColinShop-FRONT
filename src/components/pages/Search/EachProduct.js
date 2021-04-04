import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export const EachProduct = ({imgSource}) => {
    return (
        <Grid container spacing={6}>
            <Grid item md={2}>
                <img src={imgSource}></img>
            </Grid>
            <Grid item md={10} >
                <Typography variant="h6">                    
                    AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler
                </Typography>
            </Grid>
        </Grid>
    )
}
