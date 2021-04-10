import React from 'react'


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar } from '@material-ui/core';

export const CustomListItem = ({product}) => {
    return (
        <ListItem>
            <ListItemAvatar>
              <Avatar src={product.image}/>
            </ListItemAvatar>
            <ListItemText primary={`${product.name.toUpperCase()} x${product.quantity}`} secondary={`${product.date}  |  $${product.price}`} />
        </ListItem>
    )
}
