/*
*	Coded by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: This object will contain the members that are part of a team.
*/

import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Member from './Member';

//Test member data
//Replace with members of the given team
const members = [
	{
		name: 'Master Chief',
		id: 1
	},
	{
		name: 'The President',
		id: 2
	},
	{
		name: 'Some Dude',
		id: 3
	},
]



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


function MembersContainer(props){
	const {teamId} = props;
	const classes = membersStyle();
	
	return (
		<div  className={classes.Box}>
			<Typography variant="h5" className={classes.Text}>Members:</Typography>
			<Member type={0}/>
			{members.map(item => (
				<Member 
					type={1}
					name={item.name}
					id={item.id}
					teamId={teamId}
				/>
			))}
		</div>
	);
}

export default MembersContainer;