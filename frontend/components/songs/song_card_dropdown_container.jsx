import { connect } from "react-redux";

import { removePlaylisted,
    createNewPlaylisted,
} from "../../actions/playlisted_actions";
import { displayPlaylist,
} from "../../actions/playlist_actions";

import SongCardDropdown from "./song_card_dropdown";


const mapStateToProps = (state, ownProps) => ({
    currentItem: state.entities.currentItem,
    playlists: state.entities.playlists,
    source: ownProps.source,
    selectedSong: ownProps.selectedSong,
    updateSongCardDropdownState: ownProps.updateSongCardDropdownState,
    items: ownProps.items, // already contains current playlists from SongIndex
    depthLevel: ownProps.depthLevel,
})

const mapDispatchToProps = (dispatch) => ({
    removePlaylisted: (playlistedId) => dispatch( removePlaylisted(playlistedId) ),
    createNewPlaylisted: ( songId, playlistId) => dispatch( createNewPlaylisted(songId, playlistId) ),
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongCardDropdown);
