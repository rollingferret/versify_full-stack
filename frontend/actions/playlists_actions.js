import {
    postPlaylist,
    patchPlaylist,
    showPlaylist,
    indexPlaylists,
    deletePlaylist,
  } from '../util/playlists_util';

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';
export const RESET_PLAYLIST_ERRORS = 'RESET_PLAYLIST_ERRORS';


export const clearPlaylistErrors = () => dispatch => (
    dispatch(resetPlaylistErrors())
);

// export const createPlaylist = (formPlaylist) => dispatch => (
//     postPlaylist(formPlaylist)
//     .then( playlist => dispatch( receiveCurrentPlaylist(playlist) ),
//     err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
// );

export const createPlaylist = (defaultPlaylist) => dispatch => (
    postPlaylist(defaultPlaylist)
    .then( playlist => dispatch( receiveCurrentPlaylist(playlist) ),
    err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
);

export const displayPlaylist = (id) => dispatch => (
    showPlaylist(id)
    .then (playlist => dispatch( receiveCurrentPlaylist(playlist) ),
    err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
);

export const fetchPlaylists = () => dispatch => (
    indexPlaylists()
    .then (playlists => dispatch( receiveAllPlaylists(playlists) ),
    err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
);

export const editPlaylist = (playlist, id) => dispatch => (
    patchPlaylist(playlist, id)
    .then( playlist => dispatch( receiveCurrentPlaylist(playlist) ),
    err => (dispatch( receivePlaylistErrors(err.responseJSON) )))
);

export const removePlaylist = (id) => dispatch => (
    deletePlaylist(id)
    .then ( () => dispatch())
)




const receivePlaylistErrors = (errors) => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors: errors,
});

const resetPlaylistErrors = () => ({
    type: RESET_PLAYLIST_ERRORS,
});

const receiveCurrentPlaylist = (playlist) => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    playlist: playlist,
});

const receiveAllPlaylists = (playlists) => ({
    type: RECEIVE_ALL_PLAYLISTS,
    playlists: playlists,
});

