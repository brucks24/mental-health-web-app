/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This is the clickable team object. It will display team name, coach, and number of members.
*                           Upon click website will go to display the teams page.
*/

import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';


const teamStyle = makeStyles({
	Team: {
		background: 'white',
		border: 4,
		borderStyle: 'solid',
		borderColor: 'purple',
		borderRadius: 10,
		padding: '5px',
	},
	Text: {
		align: 'center',
		padding: '11px 0'
	},
	OtherText: {
		align: 'center',
		padding: '15px 0',
		fontSize: 20
	},
	Numbers: {
		align: 'center',
		padding: '11px 50px',
	},
});


function teamObj(props){
	const { name, coach, nummembers} = props;
	const classes = teamStyle();
	
	function handleEvent(){
		//Add form request for team info
		alert(name);
	}
	
	return (
		//Container for team object
		<div  className={classes.Team} id='Team' onClick={handleEvent}>
			<Grid container xs={12}>
				<Grid xs={4}>
					<Typography variant="h4">{name}</Typography>
				</Grid>
				<Grid xs={2}>
					<Typography variant="h5" className={classes.Text}>Coach:</Typography>
				</Grid>
				<Grid xs={2}>
					<Typography variant="h5" className={classes.Text}>{coach}</Typography>
				</Grid>
				<Grid xs={2}>
					<Typography variant="p" className={classes.OtherText}>Number of Members</Typography>
				</Grid>
				<Grid xs={2}>
					<Typography variant="h5" className={classes.Numbers}>{nummembers}</Typography>
				</Grid>
			</Grid>
		</div>
	);
}

export default teamObj;

