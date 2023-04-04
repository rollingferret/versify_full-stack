import { RECEIVE_ALL_PLAYLISTS,
} from "../actions/playlists_actions";


const playlistIndexReducer = (playlistsState = {}, action) => {
    Object.freeze(playlistsState); // playlistsState is an array
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        default:
            return playlistsState;
    }
}

export default playlistIndexReducer;