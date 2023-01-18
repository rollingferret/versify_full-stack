import { connect } from "react-redux";

import { clearPlaylistErrors,
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
    editPlaylist: (playlist, id) => dispatch( editPlaylist(playlist, id) ),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)