import axios from 'axios';

import { LOGIN_USER, REGISTER_USER } from './types';

import { USER_SERVER } from '../components/utils/misc';

//login
export const loginUser = (userData) => {
    console.log('userdata', userData);

    const request = axios.post(`${USER_SERVER}/login`,userData)
        .then(response=>response.data);
    
    return {
        type: LOGIN_USER,
        payload: request
    }
};

//registration
export const registerUser = (userData) => {

    const request = axios.post(`${USER_SERVER}/register`,userData).then(response => response.data );
    
    return {
        type: REGISTER_USER,
        payload: request
    }
};