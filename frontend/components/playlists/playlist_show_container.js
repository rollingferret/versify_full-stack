import { connect } from "react-redux";
import { displayPlaylist,
    editPlaylist,
    destroyPlaylist,
    clearCurrent,
} from "../../actions/playlists_actions";
import { openPlaylistDropdown,
    closePlaylistDropdown,
 } from "../../actions/ui_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentPlaylist: state.entities.currentPlaylist,
        params: ownProps.params,
        history: ownProps.history,
        currentUser: ownProps.currentUser,
        playlistDropdown: state.ui.playlistDropdown,
        // playlistedSongs: state.currentPlaylist.playlistedSongs,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    destroyPlaylist: (playlistId) => dispatch( destroyPlaylist(playlistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
    openPlaylistDropdown: () => dispatch( openPlaylistDropdown() ),
    closePlaylistDropdown: () => dispatch( closePlaylistDropdown() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);