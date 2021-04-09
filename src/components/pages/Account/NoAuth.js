import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'

export const NoAuth = () => {
    return (
        <div style={{width:'100%', height:'30vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Paper style={{padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Typography>You are not logged</Typography>
                <Button style={{marginTop:'1rem'}} variant="contained" color="secondary">Login!</Button>
            </Paper>
        </div>
    )
}
