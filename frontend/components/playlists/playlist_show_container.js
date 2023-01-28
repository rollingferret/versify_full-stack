import { connect } from "react-redux";
import { editPlaylist,
    removePlaylist,
} from "../../actions/playlists_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = () => {
    return null;
}

const mapDispatchToProps = (dispatch) => ({
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    removePlaylist: (playlistId) => dispatch( removePlaylist(playlistId) ),
})

export default connect(null, mapDispatchToProps)(PlaylistShow);