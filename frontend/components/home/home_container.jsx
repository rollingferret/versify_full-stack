import { connect } from "react-redux";

import { clearPlaylistErrors,
    createPlaylist,
    displayPlaylist,
    fetchPlaylists,
    editPlaylist,
    removePlaylist,
} from "../../actions/playlists_actions";
    
import Home from './home'

const mapStateToProps = ( {session, entities: { users },  entities: { playlists } }, {errors}) => ({
    playlists: Object.values(playlists),
    currentUser: users[session.id],
    errors: errors,
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch( fetchPlaylists() ),
    editPlaylist: (playlist, id) => dispatch( editPlaylist(playlist, id) ),
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    createPlaylist: (formPlaylist) => dispatch( createPlaylist(formPlaylist) ),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)