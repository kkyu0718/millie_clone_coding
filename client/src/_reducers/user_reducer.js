import {
    LOGIN, LOGOUT
} from '../_actions/types';

export default function (state = {user : null}, action) {
    switch (action.type) {
        case LOGIN:
            console.log("action login", action.payload)
            return {user: action.payload }
        case LOGOUT:
            return {user: null} 
        //     break;
        // case AUTH_USER:
        //     return { ...state, userData: action.payload }
        //     break;
        default:
            return state;
    }
}