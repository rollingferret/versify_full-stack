export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const PLAY_ALBUM = 'PLAY_ALBUM'
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST'
export const SHUFFLE_ARTIST = 'SHUFFLE_ARTIST'
export const SHUFFLE_ALBUM = 'SHUFFLE_ALBUM'
export const SHUFFLE_PLAYLIST = 'SHUFFLE_PLAYLIST'

const togglePlay = () => ({
    type: TOGGLE_PLAY,
})

const playAlbum = () => ({
    type: PLAY_ALBUM,
})

const playPlaylist = () => ({
    type: PLAY_PLAYLIST,
})

export const playToggle = () => dispatch => (
    dispatch(togglePlay())
);