import { connect } from "react-redux";
import { editPlaylist,
    removePlaylist,
    displayPlaylist,
} from "../../actions/playlists_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    debugger;
    return (
        null
        // {playlist: state.entities.playlists[ownProps.match.params.playlistId],}
    )
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    removePlaylist: (playlistId) => dispatch( removePlaylist(playlistId) ),
})

export default connect(null, mapDispatchToProps)(PlaylistShow);