import { Divider, Grid, Paper, Typography, makeStyles, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop:'1rem'
    },
    img:{
        width:'100%',
        borderRadius:'%',
        [theme.breakpoints.down('md')]: {
            width: "50%"
          }
    },
  
    cardContainer:{
        display:'flex',
        padding:'1rem'
    },
    textContainer:{
        width:'100%',
        padding:'1rem'
    },
    buttonContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end'
    }
}))

export const AboutCard = ({data}) => {
    const classes = useStyles()
    return (
        <Paper elevation={0} variant="outlined" className={classes.cardContainer}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={3}>
                    <div>
                        <img alt={data.name} src={data.img} className={classes.img}/>
                    </div>
                </Grid>
                <Grid item md={9}>
                    <div className={classes.textContainer}>
                    <Typography align="center" variant="h6">{data.name}</Typography>
                    <Typography align="center">{data.role}</Typography>
                    <Divider style={{marginRight:'1rem'}}/>
                    <Typography variant="body2" style={{marginTop:'1rem'}}>{data.description}</Typography>
                    </div>
                </Grid>
                <div className={classes.buttonContainer}>                   
                        <Button  href={data.linkedin} variant="contained" style={{marginRight:'1rem'}} color="secondary" size="small">Linkedin</Button>
                        <Button  href={data.github} variant="contained" color="secondary" size="small">Github</Button>
             
                </div>
            </Grid>
        </Paper>
    )
}
