export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const QUEUE_SONG = 'QUEUE_SONG'
export const QUEUE_ARTIST = 'QUEUE_ARTIST'
export const QUEUE_PLAYLIST = 'QUEUE_PLAYLIST'

const togglePlay = () => ({
    type: TOGGLE_PLAY,
})

const queueSong = () => ({
    type: QUEUE_SONG,
})

const queueArtist = (songsArray) => ({
    type: QUEUE_ARTIST,
    songs: songsArray,
})

const queuePlaylist = () => ({
    type: QUEUE_PLAYLIST,
})

export const reduxPlay = () => dispatch => (
    dispatch(togglePlay())
);

export const toQueueArtist = (songsArray) => dispatch => {
    return dispatch(queueArtist(songsArray));
}