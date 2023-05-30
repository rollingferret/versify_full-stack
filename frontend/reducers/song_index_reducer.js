import { RECEIVE_CURRENT_PLAYLIST,
} from "../actions/playlist_actions";
import { RECEIVE_CURRENT_ARTIST,
} from "../actions/artist_actions";
import { RECEIVE_CURRENT_ALBUM,
} from "../actions/album_actions";


const songIndexReducer = (songsState = {}, action) => {
    Object.freeze(songsState);
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            return action.songs.length > 0 ? action.songs : songsState;
        case RECEIVE_CURRENT_ARTIST:
            return action.songs;
        case RECEIVE_CURRENT_ALBUM:
            return action.tracks;
        default:
            return songsState;
    }
}

export default songIndexReducer;