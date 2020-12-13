import axios from 'axios';
import { setTeams } from "../../components/teams/Teams";

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

export const getStudents = () => (dispatch) => {
    axios.get("team/students").then(res => {
        console.log(res.data);
    })
    .catch(res => {
        console.log(res.data);
    });
}