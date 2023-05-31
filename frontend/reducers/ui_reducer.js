import { combineReducers } from "redux";

import playlistNavDropdownReducer from "./ui_reducers/playlist_nav_dropdown_reducer";
import playlistEditModalReducer from "./ui_reducers/playlist_edit_modal_reducer";
import albumNavDropdownReducer from "./ui_reducers/album_nav_dropdown_reducer";
import songCardDropdownReducer from "./ui_reducers/song_card_dropdown_reducer";

const uiReducer = combineReducers({
    playlistNavDropdown: playlistNavDropdownReducer,
    playlistEditModal: playlistEditModalReducer,
    albumNavDropdown: albumNavDropdownReducer,
    songCardDropdown: songCardDropdownReducer,
})

export default uiReducer;

