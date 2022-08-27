import {
    RECEIVE_CURRENT_PLAYLIST,
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST_ERRORS,
    RESET_PLAYLIST_ERRORS,
} from '../actions/playlist_actions'
  
const playlistErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            return (action.errors); // this is an array
        case RESET_PLAYLIST_ERRORS:
            return [];
        case RECEIVE_CURRENT_PLAYLIST:
            return [];
        case RECEIVE_ALL_PLAYLISTS:
            return [];
        default:
            return state;
    }
  };
  
  export default playlistErrorsReducer;
  