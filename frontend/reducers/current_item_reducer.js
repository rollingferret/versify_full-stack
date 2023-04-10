import { RECEIVE_CURRENT_PLAYLIST,
    RESET_CURRENT, 
} from "../actions/playlists_actions";

import { RECEIVE_CURRENT_ARTIST,
}from "../actions/artist_actions";

// used for Playlist#show & Album#show
const currentItemReducer = (currItemState = {}, action) => {
    Object.freeze(currItemState) // currItemState is an object
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            let currPlaylist = action.playlist;
            return currPlaylist;
        case RECEIVE_CURRENT_ARTIST:
            let currArtist = action.artist;
            return currArtist;
        case RESET_CURRENT:
            return {};
        default:
            return currItemState;
    }
}


export default currentItemReducer;