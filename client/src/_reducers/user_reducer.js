import {
    LOGIN, LOGOUT
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {loginSuccess: action.payload }
        case LOGOUT:
            return {loginSuccess: null} 
        //     break;
        // case AUTH_USER:
        //     return { ...state, userData: action.payload }
        //     break;
        default:
            return state;
    }
}