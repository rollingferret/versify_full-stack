import { connect } from "react-redux";
import { editPlaylist,
    removePlaylist,
    displayPlaylist,
    clearCurrent,
} from "../../actions/playlists_actions";

import PlaylistShow from "./playlist_show";

const mapStateToProps = (state, { match }) => {
    return ({
        playlistId: match.params.id,
        // state: state.entities.currentItem,
    })
}

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    editPlaylist: (playlist, playlistId) => dispatch( editPlaylist(playlist, playlistId) ),
    removePlaylist: (playlistId) => dispatch( removePlaylist(playlistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);