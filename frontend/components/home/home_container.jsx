import { connect } from "react-redux";

import { fetchPlaylists,
} from "../../actions/playlists_actions";

import Home from "./home";

const mapStateToProps = (state, ownProps) => ({
    // currentPlaylist: state.entitities.currentPlaylist,
    playlists: Object.values(state.entities.playlists),
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch( fetchPlaylists() ),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);