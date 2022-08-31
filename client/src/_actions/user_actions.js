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
    console.log("user action logout")
    return {
        type: LOGOUT
    }
}



