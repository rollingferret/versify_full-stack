import { RECEIVE_CURRENT_PLAYLIST } from "../actions/playlists_actions";

// used for Playlist#show & Album#show Headers
const showReducer = (currItemState = {}, action) => {
    Object.freeze(currItemState) // currItemState is an object
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            let currPlaylist = action.playlist;
            return currPlaylist;
        default:
            return currItemState;
    }
}


export default showReducer;