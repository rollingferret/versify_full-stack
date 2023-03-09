import { connect } from "react-redux";

import { clearPlaylistErrors,
} from "../../actions/playlists_actions";
import { closePlaylistDropdown,
} from "../../actions/ui_actions";   

import Main from './main'

const mapStateToProps = ( {session, entities:{ users }, entities:{ playlists }, errors}, ownProps ) => ({
    playlists: Object.values(playlists),
    currentUser: users[session.id],
    errors: errors,
    // matchObj is a prop passed down by AuthRoute = {params, path, url} as keys
    params: ownProps.match.params,
    path: ownProps.match.path,
})

const mapDispatchToProps = (dispatch) => ({
    closePlaylistDropdown: () => dispatch( closePlaylistDropdown() ),
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)