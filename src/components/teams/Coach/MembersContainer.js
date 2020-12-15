/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This object will contain the members that are part of a team.
*/

import React, { useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Member from './Member';
import { useDispatch } from 'react-redux';
import { getStudents } from '../../../redux/actions/coachActions';

//Test member data
//Replace with members of the given team

const membersStyle = makeStyles({
	Box: {
		background: 'white',
		border: 4,
		borderStyle: 'solid',
		borderColor: 'purple',
		borderRadius: 10,
		padding: '5px',
	},
	Text: {
		align: 'center',
		padding: '11px 0',
		color: 'purple'
	},
});
var members = [];
export function setStudents(students){
	members = [];
	students.forEach((mem) => {
		members.push({
			name: mem
		});
	});
}

function MembersContainer(props){
	const {teamId} = props;
	const classes = membersStyle();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStudents(teamId));
	}, [teamId]);
	
	return (
		<div  className={classes.Box}>
			<Typography variant="h5" className={classes.Text}>Members:</Typography>
			<Member type={0}/>
			{members.map(item => (
				<Member 
					type={1}
					name={item.name}
					teamId={teamId}
				/>
			))}
		</div>
	);
}

export default MembersContainer;