import { RECEIVE_CURRENT_PLAYLIST,
    RESET_CURRENT, 
} from "../actions/playlists_actions";

// used for Playlist#show & Album#show
const showReducer = (currItemState = {}, action) => {
    Object.freeze(currItemState) // currItemState is an object
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            let currPlaylist = action.playlist;
            return currPlaylist;
        case RESET_CURRENT:
            return {};
        default:
            return currItemState;
    }
}


export default showReducer;