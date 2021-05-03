import {
    SET_USER,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    LOADING_UI,
    CLEAR_ERRORS,
    SET_ERRORS,
    SHOW_SUCCESS_SNACKBAR
} from '../types';
import axios from 'axios';
import history from '../../utils/history';

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/user/login', userData).then(res => {
        setAuthorizationHeader(res.data.token);
        const userData = {
            uid: res.data._id,
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            accountType: res.data.accountType,
            createdDate: res.data.createdDate
        };
        dispatch({
            type: SET_USER,
            payload: userData
        })
        dispatch({ type: CLEAR_ERRORS });
        history.push('/dashboard');
    });
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
    history.push('/');
}

export const registerUser = (userData) => (dispatch) => {
    console.log(userData);
    dispatch({ type: LOADING_UI });
    axios.post('user/register', userData).then(res => {
        dispatch({ type: CLEAR_ERRORS });
        history.push('/');
    }).catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        });
    })
}

export const getUserData = () => dispatch => {
    dispatch({ type: LOADING_USER });
    axios.get('user/current').then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data,
        });
    }).catch(err => {
        console.log(err);
    });
};

export const panicButton = reasons => dispatch => {
    axios.post('/panic', reasons).then(res => {
        console.log(res);
        dispatch({
            type: SHOW_SUCCESS_SNACKBAR,
            payload: res.data.message
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}

export const sendMessageAction = props => dispatch => {
    axios.post('/sendMessage', props).then(res => {
        console.log(res);
        dispatch({
            type: SHOW_SUCCESS_SNACKBAR,
            payload: res.data.message
        });
    }).catch(err => {
        console.log(err);
        dispatch({
            type: SET_ERRORS,
            payload: err.message
        })
    })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};