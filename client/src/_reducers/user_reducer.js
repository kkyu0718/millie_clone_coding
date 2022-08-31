import {
    LOGIN, LOGOUT
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {loginSuccess: action.payload }
        case LOGOUT:
            return {...state, logoutSuccess: "hi"} 
        //     break;
        // case AUTH_USER:
        //     return { ...state, userData: action.payload }
        //     break;
        default:
            return {initial : "initial"}
            return state;
    }
}