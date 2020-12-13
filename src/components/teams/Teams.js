/*
*	Edited by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: Working on implementing team features for coaches
*/
import React, { useEffect, useLayoutEffect } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Team from './teamObj';
import Menu from './Coach/CoachMenu';
import { getTeam } from '../../redux/actions/coachActions';
import { getUserData } from '../../redux/actions/userActions';

//Replace with teams that user is part of
/*const teams = [
	//Test team data
	{
		name: 'COD Esports',
		coach: 'Tristan',
		id: '12',
		members: 8,
		description: 'Er mer gerd'
	},
	{
		name: 'Football',
		coach: 'Jack Oph',
		id: '254',
		members: 2,
		description: 'Er mer gerd'
	},
	{
		name: 'Finger Painting',
		coach: 'Cole Bollig',
		id: '23',
		members: 34,
		description: 'Er mer gerd'
	},
]*/
var teams = [];

export function setTeams(teamData){
	teams = [];
	teamData.forEach((info) => {
		teams.push({
			name: info.teamName,
			coach: info.coach,
			id: info.id,
			members: info.members.length,
			description: info.description
		});
	});
}

function Teams(){
   	const classes = useStyles();
	const dispatch = useDispatch();
	
	//Get user status
    const { name, user } = useSelector(state => ({
      name: `${state.user.firstName} ${state.user.lastName}`,
      user: state.user,
    }));
	var account = user.accountType;

	useEffect(() => {
		dispatch(getUserData());
		dispatch(getTeam(name));
	}, [name]);

	if (account === 0){
		//If user account is 0 (student) return all team objects that user is part of
		return (
			<div>
	 			{teams.map(item => (
					<Team
		 				name = {item.name}
		 				coach = {item.coach}
		 				id = {item.id}
						nummembers = {item.members}
					/>
				))}
		 	</div>
		)
	}
	else{
		//Else if account is 1 (coach) return coach team menu
    		return (
       		 	<div>
           	 		<Typography variant="h5" className={classes.titleText}></Typography>
				<Menu teams={teams}/>
        		</div>
   		)
	}
}

export default Teams;