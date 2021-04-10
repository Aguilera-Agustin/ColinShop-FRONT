import {  Container, makeStyles} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NoAuth } from './NoAuth';
import { getUserProductsFromGoogle } from '../../../actions/userActions';
import { AccountInfo } from './AccountInfo';



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
    const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.user)
    useEffect(() => {
        user&&dispatch(getUserProductsFromGoogle())
    }, [user, dispatch])
    return (
        <Container className={classes.container}>
            {
                user?(<AccountInfo user={user}/>)
                    :
                    (<NoAuth/>)
            }
            
        </Container>
    )
}
