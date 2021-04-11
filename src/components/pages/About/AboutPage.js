import { Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import agustin from '../../../assets/agustin.png'
import ramiro from '../../../assets/ramiro.png'
import { AboutCard } from './AboutCard'
const useStyles = makeStyles((theme)=>({
    container: {
        marginTop:'2rem'
    },
    img:{
        width:'100%',
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
    }
}))

export const AboutPage = () => {
    const dataFront = {
        name: 'Agustin Aguilera',
        role: 'Front End',
        img: agustin,
        description: "Hi! I'm Agustin. In this project, my intention is reflect all of my FrontEnd skills mading a complete and responsive Web App. You can contact me pressing any button of bellow.",
        linkedin: 'https://www.linkedin.com/in/aguilera-agustin/',
        github: 'https://github.com/Aguilera-Agustin'
    }
    const dataBack = {
        name: 'Ramiro Ambrosetti',
        role: 'Back End',
        img: ramiro,
        description: "Hello! I am Ramiro. In this project my role was to develop a complete and secure REST API, in order to demonstrate my skills inthe  BackEnd. If you liked my work you can contact me through my social networks.",
        linkedin: 'https://www.linkedin.com/in/ramiroambrosetti/',
        github: 'https://github.com/Ramitax'
    }
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography variant="h5" color="initial">About us</Typography>
            <Divider/>
            <Grid className={classes.container} container align="center" spacing={3}>
                <Grid item md={6}>
                    <AboutCard data={dataFront}/>
                </Grid>
                <Grid item md={6}>
                    <AboutCard data={dataBack}/>
                </Grid>
            </Grid>
        </Container>
    )
}
