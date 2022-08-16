import {
    postUser,
    postSession,
    deleteSession,
} from '../util/session_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user: user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errorsArray) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errorsArray,
})

export const createUser = formUser => dispatch => (
    postUser(formUser)
    .then( user => dispatch( receiveCurrentUser(user) ),
    err => (dispatch( receiveSessionErrors(err.responseJSON) )))
);
 
export const createSession = formUser => dispatch => (
    postSession(formUser)
    .then( user => dispatch( receiveCurrentUser(user)),
    err => (dispatch( receiveSessionErrors(err.responseJSON) )))
);
 
export const endSession = () => dispatch => (
    deleteSession()
    .then( () => dispatch(logoutCurrentUser()))
);

 