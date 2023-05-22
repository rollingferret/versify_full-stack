import { indexAlbums,
    showAlbum,
} from "../util/albums_util";

// ACTION TYPES
export const RECEIVE_CURRENT_ALBUM = "RECEIVE_CURRENT_ALBUM"

// THUNK ACTIONS
const receiveCurrentAlbum = (albumObj) => {
    return ({
        type: RECEIVE_CURRENT_ALBUM,
        album: albumObj.album,
        albumArtist: albumObj.albumArtist,
        tracks: albumObj.tracks,
    })
}

// THUNK ACTION CREATORS
export const displayAlbum = (albumId) => (dispatch) => {
    return showAlbum(albumId)
        .then((album) => dispatch(receiveCurrentAlbum(album)))
};