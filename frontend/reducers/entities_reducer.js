import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import playlistIndexReducer from './playlist_index_reducer';
import showReducer from './show_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    playlists: playlistIndexReducer,
    currentItem: showReducer,
})


export default entitiesReducer;