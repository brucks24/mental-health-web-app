/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This container will hold the a teams update info and team members items.
*/

import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Update from './UpdateTeam';
import MemberBox from './MembersContainer';

const infoStyle = makeStyles({
	Text: {
		color: 'purple',
		align: 'center'
	},
});


function EditTeam(props){
	const {name, id, coach, description} = props;
	const classes = infoStyle();
	
	return (
		<div>
			<Grid container xs={12}>
				<Grid xs={6}>
					<Update
						name={name}
						id={id}
						description={description}
						coach={coach}
					/>
				</Grid>
				<Grid xs={6}>
					<MemberBox
						teamId = {id}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default EditTeam;