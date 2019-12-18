import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles'

const People = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>People</Typography>
        </div>
    )
}

export default People;