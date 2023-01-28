import { connect } from "react-redux";

import { clearPlaylistErrors,
} from "../../actions/playlists_actions";   

import Main from './main'

const mapStateToProps = ( {session, entities:{ users }, entities:{ playlists }, errors}, ownProps ) => ({
    playlists: Object.values(playlists),
    currentUser: users[session.id],
    errors: errors,
    path: ownProps.match.path,
})

const mapDispatchToProps = (dispatch) => ({
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)