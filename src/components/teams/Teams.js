import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'

const Teams = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>Teams</Typography>
        </div>
    )
}

export default Teams;