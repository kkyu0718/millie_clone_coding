import {
    LOGIN, LOGOUT
} from './types';

export function login(userData) {
    return {
        type: LOGIN,
        payload: userData
    }

}

export function logout(){
    return {
        type: LOGOUT
    }
}



