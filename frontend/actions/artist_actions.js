import { indexArtists,
    showArtist,
} from "../util/artists_util"

// ACTION TYPES
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_CURRENT_ARTIST = "RECEIVE_CURRENT_ARTISTS";


// THUNK ACTIONS
const receiveAllArtists = (artists) => ({
    type: RECEIVE_ALL_ARTISTS,
    artists,
})

const receiveCurrentArtist = (artistObj) => ({
    type: RECEIVE_CURRENT_ARTIST,
    artist: artistObj.artist,
})


// THUNK ACTION CREATORS
export const fetchArtists = () => dispatch => (
    indexArtists()
        .then(artists => dispatch(receiveAllArtists(artists))),
            err => (dispatch( receiveArtistErrors(err.responseJSON) ))
)

export const displayArtist = (artistId) => dispatch => (
    showArtist(artistId)
        .then(artist => dispatch(receiveCurrentArtist(artist))),
            err => (dispatch( receiveArtistErrors(err.responseJSON) ))
)