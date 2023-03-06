import { connect } from "react-redux";
import { displayPlaylist,
    editPlaylist,
    removePlaylist,
    clearCurrent,
} from "../../actions/playlists_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentPlaylist: state.entities.currentPlaylist,
        params: ownProps.params,
        currentUser: ownProps.currentUser,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    removePlaylist: (playlistId) => dispatch( removePlaylist(playlistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);