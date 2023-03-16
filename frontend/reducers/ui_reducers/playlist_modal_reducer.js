import {PLAYLIST_MODAL_OPEN,
    PLAYLIST_MODAL_CLOSE,
} from '../../actions/ui_actions'

const playlistModalReducer = (playlistModalState = {}, action) => {
    Object.freeze(playlistModalState);
    switch (action.type) {
        default:
            return playlistModalState;
    }
}

export default playlistModalReducer;