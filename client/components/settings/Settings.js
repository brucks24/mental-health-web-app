import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'

const Settings = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>Settings</Typography>
        </div>
    )
}

export default Settings;