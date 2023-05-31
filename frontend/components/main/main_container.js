import { connect } from "react-redux";

import { clearPlaylistErrors,
    fetchPlaylists,
    displayPlaylist,
} from "../../actions/playlist_actions";

import Main from './main'

const mapStateToProps = ( {session, entities:{ users }, entities:{ playlists}, entities:{ currentItem }, errors}, ownProps ) => ({
    currentPlaylist: currentItem,
    playlists: Object.values(playlists),
    currentUser: users[session.id],
    errors: errors,
    // matchObj is a prop passed down by AuthRoute. matchObj = {params, path, url} as keys
    params: ownProps.match.params,
    path: ownProps.match.path,
    history: ownProps.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    displayPlaylist: (playlistId) => dispatch(displayPlaylist(playlistId)),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)