import { connect } from "react-redux";
import { displayArtist,
} from "../../actions/artist_actions";
import { displayAlbum,
} from "../../actions/album_actions";

import { clearCurrent,
} from "../../actions/playlist_actions";

import ArtistShow from "./artist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentArtist: state.entities.currentItem,
        playlists: state.entities.playlists,
        albums: state.entities.albums,
        collabSongs: state.entities.songs.collabSongs,
        params: ownProps.params,
        path: ownProps.path,
        currentUser: ownProps.currentUser,
        history: ownProps.history,
})}

const mapDispatchToProps = (dispatch) => ({
    displayArtist: (artistId) => dispatch( displayArtist(artistId) ),
    displayAlbum: (albumId) => dispatch( displayAlbum(albumId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);