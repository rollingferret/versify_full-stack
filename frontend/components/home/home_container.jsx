import { connect } from "react-redux";

import { clearPlaylistErrors,
} from "../../actions/playlists_actions";   

import Home from './home'

const mapStateToProps = ( {session, entities: { users },  entities: { playlists } }, {errors}) => ({
    playlists: Object.values(playlists),
    currentUser: users[session.id],
    errors: errors,
})

const mapDispatchToProps = (dispatch) => ({
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)