import { RECEIVE_CURRENT_PLAYLIST,
    RECEIVE_ALL_PLAYLISTS,
    DELETE_PLAYLIST,
} from "../actions/playlists_actions";


const playlistsReducer = (playlistsState = {}, action) => {
    Object.freeze(playlistsState); // playlistsState is an array
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case DELETE_PLAYLIST: 
            // sometimes playlist fetch before it is deleted from front-end
            return {};
        default:
            return playlistsState;
    }
}

export default playlistsReducer;