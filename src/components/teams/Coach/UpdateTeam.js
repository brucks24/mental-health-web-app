/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This object will display current team info and allow user to update that info.
*/

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateTeam } from '../../../redux/actions/coachActions';


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
		fontSize: 15,
		float: 'right'
	},
	updateInput: {
		borderColor: 'purple',
		border: 4,
		borderStyle: 'solid',
		borderRadius: 7,
		fontSize: 25
	},
	updateDescription: {
		borderColor: 'purple',
		border: 4,
		borderStyle: 'solid',
		borderRadius: 7,
		fontSize: 12,
		width: 50
	},
	Submit: {
		borderColor: 'purple',
		border: 5,
		borderStyle: 'solid',
		borderRadius: 7,
		backgroundColor: 'purple',
		fontSize: 15,
		color: 'white',
		padding: '0 20px',
		textShadow: '2px 2px 5px DarkViolet'
	}
});


function UpdateTeam(props){
	const dispatch = useDispatch();
	const {name,coach,description} = props;
	const classes = infoStyle();
	const [newname, setNewName] = useState("");
	const [newdesc, setNewDesc] = useState("");

	 function handleSubmit(event){
		 //Upon clicking Update form request is sent
		 //Sent data: oldteamname, newteamname, coach, olddescription, and newdescription
		 //If any new data is empty then use old data for update else use new data
		event.preventDefault();
		const updatedInfo = {
			oldname: name,
			coach: coach,
			newname: newname,
			description: newdesc,
			olddescription: description
		 };
		dispatch(updateTeam(updatedInfo, props.history));
	 }
	
	return (
		<div  className={classes.Box}>
			<form onSubmit={handleSubmit}>
			<Grid container xs={12}>
				<Grid container xs={4}>
					<label className={classes.Text}>Team Name:</label>
				</Grid>
				<Grid container xs={4}>
					<input type="text" value={name} className={classes.createInput} placeholder='Team Name' disabled/>
					<input type="hidden" name='oldteamname' value={name}/>
				</Grid>
				<Grid container xs={2}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4}></Grid>
				<Grid container xs={4}>
					<input type="text" name='newteamname' className={classes.createInput} placeholder='New Team Name' onChange={e => setNewName(e.target.value)}/>
				</Grid>
				<Grid container xs={2}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4}>
					<label className={classes.Text}>Coach:</label>
				</Grid>
				<Grid container xs={2}>
					<input type="text" className={classes.createInput} disabled value={coach}/>
					<input type="hidden" name='coach' value={coach}/>
				</Grid>
				<Grid container xs={6}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4} wrap='wrap-reverse'>
					<label className={classes.Text}>Description:</label>
				</Grid>
				<Grid container xs={4}>
					<textarea  className={classes.createDecription} cols='40' value={description} disabled/>
					<input type="hidden" name='olddescription' value={description}/>
				</Grid>
				<Grid container xs={2}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={4}></Grid>
				<Grid container xs={4}>
					<textarea name='newdescription' className={classes.createDecription} cols='40' placeholder='Enter New Description of Team Here'  onChange={e => setNewDesc(e.target.value)}/>
				</Grid>
				<Grid container xs={2}></Grid>
			</Grid>
			<Grid container xs={12}>
				<Grid container xs={5}></Grid>
				<Grid container xs={2}>
					<input type="Submit" value="Update" className={classes.Submit}/>
				</Grid>
				<Grid container xs={2}></Grid>
			</Grid>
			</form>
		</div>
	);
}

export default UpdateTeam;