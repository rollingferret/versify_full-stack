import { postPlaylistedSong,
    deletePlaylistedSong
} from "../util/playlisted_songs_util";
import { fetchPlaylists,
    displayPlaylist,
} from "./playlist_actions";


// Action types
export const RECEIVE_NEW_PLAYLISTED_SONG = "RECEIVE_NEW_PLAYLISTED_SONG";
export const REMOVE_PLAYLISTED_SONG = "REMOVE_PLAYLISTED_SONG";

// Thunk Action creators
export const createNewPlaylistedSong = ( songId, playlistId ) => {
    postPlaylistedSong( songId, playlistId )
        .then( playlistedSong => fetchPlaylists(),
            err => (console.log(err)) 
        )
}

export const removePlaylistedSong = ( playlistedSongId ) => {
    deletePlaylistedSong(playlistedSongId)
        .then ( (playlistedSong) => displayPlaylist(playlistedSong.playlistId) );
}