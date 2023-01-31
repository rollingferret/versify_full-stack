import { connect } from "react-redux";
import { editPlaylist,
    removePlaylist,
    displayPlaylist,
} from "../../actions/playlists_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        match: ownProps.match,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    removePlaylist: (playlistId) => dispatch( removePlaylist(playlistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);