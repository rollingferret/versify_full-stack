// create slice of State for our current user data

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions'

// First we create a default state with no current user
  const _nullUser = Object.freeze({
    id: null
  });
  
  const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return _nullUser;
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  