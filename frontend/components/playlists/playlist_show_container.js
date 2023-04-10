import { connect } from "react-redux";
import { displayPlaylist,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    clearCurrent,
} from "../../actions/playlists_actions";
import { openPlaylistDropdown,
    closePlaylistDropdown,
    openPlaylistModal,
    closePlaylistModal,
 } from "../../actions/ui_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentPlaylist: state.entities.currentItem,
        params: ownProps.params,
        history: ownProps.history,
        currentUser: ownProps.currentUser,
        playlistDropdownState: state.ui.playlistDropdown,
        playlistModalState: state.ui.playlistModal,
        // playlistedSongs: state.currentPlaylist.playlistedSongs,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
    fetchPlaylists: (playlistId) => dispatch( fetchPlaylists(playlistId) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    destroyPlaylist: (playlistId) => dispatch( destroyPlaylist(playlistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
    openPlaylistDropdown: () => dispatch( openPlaylistDropdown() ),
    closePlaylistDropdown: () => dispatch( closePlaylistDropdown() ),
    openPlaylistModal: () => dispatch( openPlaylistModal() ),
    closePlaylistModal: () => dispatch( closePlaylistModal() ),

})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);