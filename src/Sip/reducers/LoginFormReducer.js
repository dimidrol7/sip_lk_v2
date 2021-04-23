//import * as actionTypes from '../actionTypes/LoginFormActionTypes';

//import abonentList from "./AbonentListReducer";

const LOGIN = 'LOGIN';
const LOGIN_PROGRESS = 'LOGIN_PROGRESS';
const LOGIN_CHANGE_USER = 'LOGIN_CHANGE_USER';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_CLEAR = 'LOGIN_CLEAR';


const initialLogin = {
    errors: {},
    successMessage: '',
    user: {
        login:'maleks',
        password: 'dc888ee',
    },
    submitDisabled: false,
};




export const loginForm = (state = initialLogin, action) => {
    switch (action.type) {
        case LOGIN_CHANGE_USER:
            return { ...state, user: { ...state.user, ...action.user } };
        case LOGIN_CLEAR:
            return initialLogin;
        case LOGIN_PROGRESS:
            return { ...state, submitDisabled: true };
        case LOGIN_SUCCESS:
            return initialLogin;
        case LOGIN_ERROR:
            return { ...state, errors: action.errors, submitDisabled: false };
        default:
            return state;
    }
}


export const loginProgress = () => ({type: LOGIN_PROGRESS})
export const loginChangeUser = (user) => ({type: LOGIN_CHANGE_USER, user})
export const loginError = (errors) => ({type: LOGIN_ERROR, errors})
export const loginSuccess = () => ({type: LOGIN_PROGRESS})
export const loginClear = () => ({type: LOGIN_CLEAR})

export default loginForm;