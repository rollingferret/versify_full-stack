import { connect } from "react-redux";
import { displayArtist,
} from "../../actions/artist_actions";
import { displayAlbum,
} from "../../actions/album_actions";
import { reduxPlay,
    toQueueArtist,
} from "../../actions/now_playing_actions";

import { clearCurrent,
} from "../../actions/playlist_actions";

import ArtistShow from "./artist_show";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentArtist: state.entities.currentItem,
        albums: state.entities.albums,
        allSongs: state.entities.songs.allSongs,
        collabSongs: state.entities.songs.collabSongs,
        isPlaying: state.entities.nowPlaying.isPlaying,
        params: ownProps.params,
        path: ownProps.path,
        currentUser: ownProps.currentUser,
        history: ownProps.history,
})}

const mapDispatchToProps = (dispatch) => ({
    displayArtist: (artistId) => dispatch( displayArtist(artistId) ),
    displayAlbum: (albumId) => dispatch( displayAlbum(albumId) ),
    reduxPlay: () => dispatch( reduxPlay() ),
    toQueueArtist: (songsArray) => dispatch( toQueueArtist(songsArray) ),
    clearCurrent: () => dispatch( clearCurrent() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);