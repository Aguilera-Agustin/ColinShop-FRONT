import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {startLoginWithGoogle} from '../../../actions/authActions'

export const NoAuth = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)
    const handleOnClick = () =>{
        dispatch(startLoginWithGoogle())
    }
    return (
        <div style={{width:'100%', height:'30vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Paper style={{padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Typography>You are not logged</Typography>
                <Button style={{marginTop:'1rem'}} variant="contained" color="secondary" onClick={handleOnClick} disabled={loading}>Login!</Button>
            </Paper>
        </div>
    )
}
