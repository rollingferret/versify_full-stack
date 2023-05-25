import { connect } from "react-redux";
import { clearCurrent,
} from "../../actions/playlists_actions";
import { displayAlbum,
} from "../../actions/album_actions";

import AlbumShow from "./album_show";

const mapStateToProps = (state, ownProps) => {

    return {
    currentAlbum: state.entities.currentItem,
    tracks: state.entities.songs,
    albumArtist: state.entities.currentItem.albumArtist,
    params: ownProps.params,
    currentUser: ownProps.currentUser,
    history: ownProps.history,
}}

const mapDispatchToProps = dispatch => ({
    displayAlbum: (albumId) => dispatch( displayAlbum(albumId) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);