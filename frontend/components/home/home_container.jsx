import { connect } from "react-redux";

import { fetchPlaylists,
} from "../../actions/playlists_actions";
import { fetchArtists,
} from "../../actions/artist_actions";

import Home from "./home";

const mapStateToProps = (state, ownProps) => ({
    // currentPlaylist: state.entitities.currentPlaylist,
    params: ownProps.params,
    history: ownProps.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchArtists: () => dispatch( fetchArtists() ,)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);