import {
    postPlaylist,
    patchPlaylist,
    showPlaylist,
    indexPlaylist,
    deletePlaylist,
  } from '../util/playlists_util'

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST'

export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS'

const receiveCurrentPlaylist = playlist => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlist: playlist,
})

const receivePlaylistErrors = (errors) => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors: errors,
})

export const createPlaylist = formPlaylist => dispatch => (
    postPlaylist(formPlaylist)
    .then( playlist => dispatch( receiveCurrentPlaylist(playlist) ),
    err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
)