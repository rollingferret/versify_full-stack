import { combineReducers } from "redux";

import playlistDropdownReducer from "./ui_reducers/playlist_dropdown_reducer";
import playlistModalReducer from "./ui_reducers/playlist_modal_reducer";

const uiReducer = combineReducers({
    playlistDropdown: playlistDropdownReducer,
    playlistModal: playlistModalReducer,
})

export default uiReducer;

