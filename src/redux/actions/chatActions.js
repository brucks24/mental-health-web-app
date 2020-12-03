import { LOADING_CHATS, CLEAR_ERRORS, LOAD_CHATS } from '../types';
import history from '../../utils/history';
import axios from 'axios';

export const getUserChats = (userId) => (dispatch) => {
    dispatch({ type: LOADING_CHATS });
    axios.post('/chat/fetch', userId).then(res => {

        dispatch({
            type: LOAD_CHATS
        })
        dispatch({ type: CLEAR_ERRORS });
        history.push('/dashboard');
    });
}

export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};