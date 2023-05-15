import { RECEIVE_CURRENT_ARTIST,
} from "../actions/artist_actions";


const songIndexReducer = (songsState = {}, action) => {
    Object.freeze(songsState);
    switch (action.type) {
        case RECEIVE_CURRENT_ARTIST:
            return action.songs;
        default:
            return songsState;
    }
}

export default songIndexReducer;