/*
*	Edited by: Cole Bollig
*	Time: Fall 2020 semester
*	Description: Working on implementing team features for coaches
*/
import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Team from './teamObj';
import Menu from './Coach/CoachMenu';
import { getTeam } from '../../redux/actions/coachActions';
import { getUserData } from '../../redux/actions/userActions';

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
	}, [user.loading]);

	if (account === 1){
		return (
			<div>
				<Typography variant="h5" className={classes.titleText}></Typography>
				<Menu teams={teams}/>
			</div>
		)	
	}else{
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
}

export default Teams;