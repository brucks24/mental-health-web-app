/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This will allow coach to input data for a team name and upon clicking create
*                           will send a form request to create new team.
*/

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam } from '../../../redux/actions/coachActions';

const infoStyle = makeStyles({
	Box: {
		background: 'Orchid',
		border: 4,
		borderStyle: 'solid',
		borderColor: 'purple',
		borderRadius: 10,
		padding: '5px',
	},
	Text: {
		color: 'white',
		fontSize: 25,
		float: 'right'
	},
	createInput: {
		borderColor: 'purple',
		border: 4,
		borderStyle: 'solid',
		borderRadius: 7,
		fontSize: 25
	},
	createDescription: {
		borderColor: 'purple',
		border: 4,
		borderStyle: 'solid',
		borderRadius: 7,
		fontSize: 12,
	},
	Submit: {
		borderColor: 'purple',
		border: 5,
		borderStyle: 'solid',
		borderRadius: 7,
		backgroundColor: 'purple',
		fontSize: 25,
		color: 'white',
		padding: '0 20px',
		textShadow: '2px 2px 5px DarkViolet',
	}
});

function CreateTeam(props){
	const classes = infoStyle();
	const dispatch = useDispatch();
   	const { name } = useSelector(state => ({
      		name: `${state.user.firstName} ${state.user.lastName}`,
			user: state.user,
   	 }));
	const [teamName, setName] = useState("");
	const [description, setDesc] = useState("");

	function handleSubmit(event){
		 //Upon clicking create send form request
		 //Sent data teamname, coach, and description
		 event.preventDefault();
		 const teamData = {
			teamName: teamName,
			coach: name,
			description: description
		 };
		 dispatch(createTeam(teamData, props.history));
		 window.location.reload();
	 }
	
	return (
		<div  className={classes.Box}>
			<form onSubmit={handleSubmit} method="post">
			<Grid container xs={12}>
				<Grid container xs={4}>
					<label className={classes.Text}>Team Name:</label>
				</Grid>
				<Grid container xs={4}>
					<input type="text" name='teamname' className={classes.createInput} placeholder='Team Name' onChange={e => setName(e.target.value)} required/>
				</Grid>
				<Grid container xs={4}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4}>
					<label className={classes.Text}>Coach:</label>
				</Grid>
				<Grid container xs={2}>
					<input type="text" value={name}className={classes.createInput} disabled/>
					<input type="hidden" name='coach' value={name}/>
				</Grid>
				<Grid container xs={6}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4} wrap='wrap-reverse'>
					<label className={classes.Text} placeholder='Description'>Description:</label>
				</Grid>
				<Grid container xs={4}>
					<textarea name='description' className={classes.createDecription} placeholder='Enter Team Description Here' onChange={e => setDesc(e.target.value)}/>
				</Grid>
				<Grid container xs={4}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={5}></Grid>
				<Grid container xs={2}>
					<button type="Submit" className={classes.Submit}>Create</button>
				</Grid>
				<Grid container xs={4}></Grid>
			</Grid>
			</form>
		</div>
	);
}

export default CreateTeam;