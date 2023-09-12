export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const QUEUE_SONG = 'QUEUE_SONG'
export const QUEUE_ALBUM = 'QUEUE_ALBUM'
export const QUEUE_PLAYLIST = 'QUEUE_PLAYLIST'

const togglePlay = () => ({
    type: TOGGLE_PLAY,
})

const queueSong = () => ({
    type: QUEUE_SONG,
})

const queueAlbum = (songsArray) => ({
    type: QUEUE_ALBUM,
    songs: songsArray,
})

const queuePlaylist = () => ({
    type: QUEUE_PLAYLIST,
})

export const reduxPlay = () => dispatch => (
    dispatch(togglePlay())
);

export const albumQueue = (songsArray) => dispatch => {
    return dispatch(queueAlbum(songsArray));
}