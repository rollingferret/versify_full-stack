import { RECEIVE_CURRENT_PLAYLIST,
    RECEIVE_ALL_PLAYLISTS,
    DELETE_PLAYLIST,
} from "../actions/playlists_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case RECEIVE_CURRENT_PLAYLIST:
            return { [action.playlist.id]: action.playlist};
        case DELETE_PLAYLIST:
            
        default:
            return state;
    }
}

export default playlistsReducer;