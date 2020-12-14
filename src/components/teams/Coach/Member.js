/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This is the member object. It will display a single member of the team that this object is part of.
*                           There is a remove button that upon clicking will remove the member from team.
*/
import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';


const memberStyle = makeStyles({
	Member: {
		background: 'white',
		border: 4,
		borderStyle: 'solid',
		borderColor: 'purple',
		borderRadius: 10,
		padding: '5px',
	},
	Text: {
		align: 'center',
		color: 'purple',
		fontSize: 15,
		padding: '5px 0'
	},
	Remove: {
		border: 4,
		borderStyle: 'solid',
		borderRadius: 10,
		borderColor: 'black',
		backgroundColor: 'red',
		color: 'white',
		fontSize: 15,
		padding: '0 25px'
	}
});


function Member(props){
	const { name,type } = props;
	const classes = memberStyle();
	
	function handleRemove(){
		//Add remove player from team
		alert('Removed '+name);
	}
	
	function handleAdd(){
		//Add feature to add new member to team
		prompt('Enter Name to add to team:');
	}
	
	if (type === 0){
		return (
			<div  className={classes.Member}onClick={handleAdd}>
				<Grid container xs={12}>
					<Grid xs={8}>
						<Typography className={classes.Text}>Click To Add Member</Typography>
					</Grid>
					<Grid xs={4}></Grid>
				</Grid>
			</div>
		);
	}
	else{
		return (
			//Container for member object
			<div  className={classes.Member}>
				<Grid container xs={12}>
					<Grid xs={8}>
						<Typography className={classes.Text}>{name}</Typography>
					</Grid>
					<Grid xs={4}>
						<Typography className={classes.Remove} onClick={handleRemove}>Remove</Typography>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Member;