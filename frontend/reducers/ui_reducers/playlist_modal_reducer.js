import {PLAYLIST_MODAL_OPEN,
    PLAYLIST_MODAL_CLOSE,
} from '../../actions/ui_actions'
import { RECEIVE_CURRENT_PLAYLIST,
} from '../../actions/playlists_actions';

const playlistModalReducer = (playlistModalState = {}, action) => {
    Object.freeze(playlistModalState);
    switch (action.type) {
        case PLAYLIST_MODAL_OPEN:
            return {isOpen: true};
        case PLAYLIST_MODAL_CLOSE:
            return {isOpen: false};
        case RECEIVE_CURRENT_PLAYLIST:
            return {isOpen: false};
        default:
            return playlistModalState;
    }
}

export default playlistModalReducer;