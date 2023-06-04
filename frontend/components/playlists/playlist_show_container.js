import { connect } from "react-redux";
import { displayPlaylist,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    clearCurrent,
} from "../../actions/playlist_actions";
import { openPlaylistNavDropdown,
    closePlaylistNavDropdown,
    openPlaylistEditModal,
    closePlaylistEditModal,
    openSongCardDropdown
 } from "../../actions/ui_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentPlaylist: state.entities.currentItem,
        params: ownProps.params,
        history: ownProps.history,
        playlistSongs: state.entities.songs,
        currentUser: ownProps.currentUser,
        playlistNavDropdownState: state.ui.playlistNavDropdown,
        playlistEditModalState: state.ui.playlistEditModal,
        songCardDropdownState: state.ui.songCardDropdown,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
    fetchPlaylists: (playlistId) => dispatch( fetchPlaylists(playlistId) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    destroyPlaylist: (playlistId) => dispatch( destroyPlaylist(playlistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
    openPlaylistNavDropdown: () => dispatch( openPlaylistNavDropdown() ),
    closePlaylistNavDropdown: () => dispatch( closePlaylistNavDropdown() ),
    openPlaylistEditModal: () => dispatch( openPlaylistEditModal() ),
    closePlaylistEditModal: () => dispatch( closePlaylistEditModal() ),
    openSongCardDropdown: () => dispatch( openSongCardDropdown() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);