import { SEND_TEAM_DATA } from '../types';
import axios from 'axios';

export const createTeam = () => (dispatch) => {
    axios.post('team/create').then(res => {
        console.log(res);
    })
    .catch(res => {
        console.log(res);
    });
}