import { connect } from "react-redux";
import { displayArtist,
} from "../../actions/artist_actions";
import { clearCurrent,
} from "../../actions/playlists_actions";

import ArtistShow from "./artist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentArtist: state.entities.currentItem,
        albums: state.entities.albums,
        params: ownProps.params,
        path: ownProps.path,
        currentUser: ownProps.currentUser,
        history: ownProps.history,
})}

const mapDispatchToProps = (dispatch) => ({
    displayArtist: (artistId) => dispatch( displayArtist(artistId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);