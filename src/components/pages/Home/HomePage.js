import React from 'react'
import { ButtonBar } from '../../navigation/ButtonBar'
import { Container, makeStyles, Typography, Button } from '@material-ui/core'




const useStyles = makeStyles({
    container:{
        height:'81vh',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        marginTop:'2rem'
    },
    bold:{
        fontWeight:'800'
    }
    
})


export const HomePage = () => {
    const classes = useStyles()
   
    
    
    return (
        <>
            <ButtonBar/>
            <Container className={classes.container}>                   
                        <Typography variant="h2" align="center">
                            Create your custom <b className={classes.bold}>PC gamer</b>
                        </Typography>
                        <Button className={classes.button} variant="contained" color="secondary" >START!</Button>                      
            </Container>
        </>
    )
}
