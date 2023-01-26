import { RECEIVE_CURRENT_PLAYLIST,
    RECEIVE_ALL_PLAYLISTS,
    DELETE_PLAYLIST,
} from "../actions/playlists_actions";

const playlistsReducer = (playlistsState = {}, action) => {
    Object.freeze(playlistsState); // playlistsState is an array
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case RECEIVE_CURRENT_PLAYLIST:
            let newPlaylistsState = [ ... playlistsState ]
            for (let i = 0; i < newPlaylistsState.length; i++) {
                if (newPlaylistsState[i].id === action.playlist.id) {
                    newPlaylistsState[i] = action.playlist;
                }
            }
            return newPlaylistsState;
        case DELETE_PLAYLIST:
            
        default:
            return playlistsState;
    }
}

export default playlistsReducer;