// create slice of State for our current user data

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions'

// First we create a default state with no current user
  const nullUser = Object.freeze({
    id: null
  });
  
  const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return nullUser;
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  