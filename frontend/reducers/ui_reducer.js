import { combineReducers } from "redux";

import playlistDropdownReducer from "./ui_reducers/playlist_dropdown_reducer";
import playlistEditModalReducer from "./ui_reducers/playlist_edit_modal";

const uiReducer = combineReducers({
    playlistDropdown: playlistDropdownReducer,
    playlistEditModal: playlistEditModalReducer,
})

export default uiReducer;

