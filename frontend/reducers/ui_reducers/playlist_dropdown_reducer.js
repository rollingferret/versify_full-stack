import { PLAYLIST_DROPDOWN_OPEN,
    PLAYLIST_DROPDOWN_CLOSE,
} from "../../actions/ui_actions";

const playlistDropdownReducer = (playlistDropdownState = {isOpen: false}, action) => {
    Object.freeze(playlistDropdownState);
    switch (action.type) {
        case PLAYLIST_DROPDOWN_OPEN:
            return {isOpen: true};
        case PLAYLIST_DROPDOWN_CLOSE:
            return {isOpen: false};
        default:
            return playlistDropdownState;
    }
}

export default playlistDropdownReducer;    