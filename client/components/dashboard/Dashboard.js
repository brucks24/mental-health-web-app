import React from 'react';
import {Grid, Link} from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

import SummaryBox from './SummaryBox';
import Chat from './Chat';

const data = {
    recentChats: [
        // {id: 1, title: 'John Doe', text: 'You: .......'},
        // {id: 2, title: 'Tim Weston', text: 'John: Yeah pretty much'},
        // {id: 3, title: 'Jane Waldo', text: 'You: Thats what I told him'},
        // {id: 4, title: 'Warren Fletcher', text: 'You: Check your messages from last week'}
    ]
};

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h5" className={classes.titleText}>Support Services</Typography>

            <Grid container spacing={4} style={{marginBottom: '15px'}}>
                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.card}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Athletics Department</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardPink}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Sports Medicine</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardRed}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Sports Medicine</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardBlue}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Sport Nutrition</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardIndigo}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Sport Psychology</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardCyan}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Health and Well-being</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardTeal}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Academic Excelence</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardGreen}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Leadership Development</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item lg={3}
                      sm={6}
                      xl={3}
                      xs={12}>
                    <Card className={classes.cardLightGreen}>
                        <CardContent styles={{height: 80}}>
                            <Typography className={classes.cardContent}>Conduct and Compliance</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* <Grid container spacing={10} style={{marginBottom: '15px'}}>
                
                <Grid item xs>
                    <Chat data={data.recentChats}/>
                </Grid>
            </Grid> */}
        </div>
    );
};

export default Dashboard;