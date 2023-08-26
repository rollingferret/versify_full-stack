export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const PLAY_ALBUM = 'PLAY_ALBUM'
export const PLAY_PLAYLIST = 'PLAY_PLAYLIST'

const togglePlay = () => ({
    type: TOGGLE_PLAY,
})

const playAlbum = () => ({
    type: PLAY_ALBUM,
})

const playPlaylist = () => ({
    type: PLAY_PLAYLIST,
})

export const reduxPlay = () => dispatch => (
    dispatch(togglePlay())
);