/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This menu will allow the coach to navigate between teams that they are part of.
*			     When navigating between teams that teams edit page will be displayed.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditContainer from './EditTeamContainer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const {teams} = props;
  const classes = useStyles();
  var count = 0;
  var otherCount = 0;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {teams.map(item => (
			  <Tab label={item.name} {...a11yProps(count++)}/>
          ))}
        </Tabs>
      </AppBar>
          {teams.map(item => (
      		<TabPanel value={value} index={otherCount++}>
			  <EditContainer
			  	name={item.name}
				id={item.id}
				description={item.description}
				coach={item.coach}
			  />
		</TabPanel>
          ))}
    </div>
  );
}