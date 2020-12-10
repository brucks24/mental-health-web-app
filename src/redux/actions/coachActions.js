import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import axios from 'axios';

export const createTeam = () => (dispatch) => {
    axios.post('team/create').then(res => {
        // TODO: set data on page to the res.
    })
}