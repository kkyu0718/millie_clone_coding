import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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



