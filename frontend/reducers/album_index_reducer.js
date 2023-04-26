import { RECEIVE_CURRENT_ARTIST,
} from "../actions/artist_actions";

const albumIndexReducer = (albumsState = {}, action) => {
    Object.freeze(albumsState)
    switch (action.type) {
        case RECEIVE_CURRENT_ARTIST:
            let artistAlbums = action.albums;
            return artistAlbums;
        default:
            return albumsState;
    }
}

export default albumIndexReducer;