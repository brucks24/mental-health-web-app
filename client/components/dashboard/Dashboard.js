import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

import SummaryBox from './SummaryBox';
import Chat from './Chat';

const data = {
    recentChats: [
        {id: 1, title: 'John Doe', text: 'You: .......'},
        {id: 2, title: 'Tim Weston', text: 'John: Yeah pretty much'},
        {id: 3, title: 'Jane Waldo', text: 'You: Thats what I told him'},
        {id: 4, title: 'Warren Fletcher', text: 'You: Check your messages from last week'}
    ]
};

const Dashboard = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>Dashboard</Typography>

            <Grid container spacing={4} style={{marginBottom: '15px'}}>
                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card><CardContent styles={{height: 80}}/></Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card><CardContent styles={{height: 80}}/></Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card><CardContent styles={{height: 80}}/></Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card><CardContent styles={{height: 80}}/></Card>
                </Grid>

            </Grid>

            <Grid container spacing={10} style={{marginBottom: '15px'}}>
                
                <Grid item xs>
                    <Chat data={data.recentChats}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;