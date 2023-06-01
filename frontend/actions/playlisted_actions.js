import { postPlaylisted,
    deletePlaylisted
} from "../util/playlisteds_util";
import { fetchPlaylists,
    displayPlaylist,
} from "./playlist_actions";


// Action types
export const RECEIVE_NEW_PLAYLSITED = "RECEIVE_NEW_PLAYLSITED";
export const REMOVE_PLAYLSITED = "REMOVE_PLAYLSITED";

// Thunk Action creators
export const createNewPlaylisted = ( songId, playlistId ) => {
    postPlaylisted( songId, playlistId )
        .then( playlisted => fetchPlaylists(),
            err => (console.log(err)) 
        )
}

export const removePlaylisted = ( playlistedId ) => {
    deletePlaylisted(playlistedId)
        .then ( (playlisted) => displayPlaylist(playlisted.playlistId) );
}