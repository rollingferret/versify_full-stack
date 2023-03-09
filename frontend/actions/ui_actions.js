
// Declare action type constants
export const PLAYLIST_DROPDOWN_OPEN = 'PLAYLIST_DROPDOWN_OPEN'
export const PLAYLIST_DROPDOWN_CLOSE = 'PLAYLIST_DROPDOWN_CLOSE'

// Declare actions that will be read by the reducer
const playlistDropdownOpen = () => ({
    type: PLAYLIST_DROPDOWN_OPEN,
})

const playlistDropdownClose = () => ({
    type: PLAYLIST_DROPDOWN_CLOSE,
})

// Declare Thunk action creators linked to dispatch
export const openPlaylistDropdown = () => dispatch => (
    dispatch(playlistDropdownOpen())
);
export const closePlaylistDropdown = () => dispatch => (
    dispatch(playlistDropdownClose())
);
