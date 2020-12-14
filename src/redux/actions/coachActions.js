import axios from 'axios';
import { setTeams } from "../../components/teams/Teams";
import { setStudents } from "../../components/teams/Coach/MembersContainer";

export const createTeam = (team) => (dispatch) => {
    axios.post('team/create', team).then(res => {
        console.log(res.data);
    })
    .catch(res => {
        console.log(res.data);
    });
}

export const updateTeam = (update) => (dispatch) => {
    axios.post("team/update", update).then(res => {
        console.log(res.data);
    })
    .catch(res => {
        console.log(res.data);
    });
}

export const getTeam = (name) => (dispatch) => {
    axios.get(`team/${name}`).then(res => {
        setTeams(res.data);
    })
    .catch(res => {
        console.log(res.data);
    });
}

export const getStudents = (teamId) => (dispatch) => {
    axios.get(`team/students/${teamId}`).then(res => {
        setStudents(res.data);
    })
    .catch(res => {
        console.log(res.data);
    });
}