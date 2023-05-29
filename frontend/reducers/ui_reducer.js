import { combineReducers } from "redux";

import playlistNavDropdownReducer from "./ui_reducers/playlist_dropdown_reducer";
import playlistEditModalReducer from "./ui_reducers/playlist_edit_modal_reducer";
import trackCardDropdownReducer from "./ui_reducers/track_card_dropdown_reducer";

const uiReducer = combineReducers({
    playlistNavDropdown: playlistNavDropdownReducer,
    playlistEditModal: playlistEditModalReducer,
    trackCardDropdown: trackCardDropdownReducer,
})

export default uiReducer;

