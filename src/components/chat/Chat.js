import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'

const Chat = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>Chat</Typography>
        </div>
    )
}

export default Chat;