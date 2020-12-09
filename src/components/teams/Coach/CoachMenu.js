/*
*	Edited by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This is the coaches team navigation bar that will allow coach to navigate to 
*                           Display Teams coach is part of, Create a new team, or Edit an existing team.
*/

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Team from '../teamObj';
import TeamsMenu from './EditTeamsMenu';
import Create from './CreateTeam';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const {teams} = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Teams" {...a11yProps(0)} />
          <Tab label="Create Team" {...a11yProps(1)} />
	  <Tab label="Edit Team" {...a11yProps(2)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
 	{teams.map(item => (
		<Team
	 		name = {item.name}
	 		coach = {item.coach}
	 		id = {item.id}
			nummembers = {item.members}
		/>
	 ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        	<Create/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       	 	<TeamsMenu teams={teams}/>
      </TabPanel>
    </div>
  );
}
