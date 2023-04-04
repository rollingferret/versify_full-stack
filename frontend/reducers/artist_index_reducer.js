import { RECEIVE_ALL_ARTISTS,
} from "../actions/artist_actions";


const artistIndexReducer = (artistsState = {}, action) => {
    Object.freeze(artistsState);
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        default:
            return artistsState;
    }
}

export default artistIndexReducer;