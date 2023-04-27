import { indexAlbums,
    showAlbum,
} from "../util/albums_util";

// ACTION TYPES
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS"
export const RECEIVE_CURRENT_ALBUM = "RECEIVE_CURRENT_ALBUM"

// THUNK ACTIONS
const receiveArtistAlbums = (albums) => {
    return ({
        type: RECEIVE_ARTIST_ALBUMS,
        albums,
    })
}

// THUNK ACTION CREATORS
