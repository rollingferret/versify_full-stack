import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import playlistIndexReducer from './playlist_index_reducer';
import currentPlaylistReducer from './current_playlist_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistIndexReducer,
    currentPlaylist: currentPlaylistReducer,
})


export default entitiesReducer;