import { connect } from "react-redux";

import { removePlaylisted,
    createNewPlaylisted,
} from "../../actions/playlisted_actions";
import { displayPlaylist,
} from "../../actions/playlist_actions";

import SongCardDropdown from "./song_card_dropdown";


const mapStateToProps = (state, ownProps) => {
    return ({
        currentItem: state.entities.currentItem,
        playlists: state.entities.playlists,
        source: ownProps.source,
        selectedSong: ownProps.selectedSong,
        updateSongCardDropdownState: ownProps.updateSongCardDropdownState,
        updateDropdownPosition: ownProps.updateDropdownPosition,
        items: ownProps.items, // already contains current playlists from SongIndex
        depthLevel: ownProps.depthLevel,
        submenuState: ownProps.submenuState,
        dropdownPosition: ownProps.dropdownPosition,
})};

const mapDispatchToProps = (dispatch) => ({
    removePlaylisted: (playlistedId) => dispatch( removePlaylisted(playlistedId) ),
    createNewPlaylisted: ( songId, playlistId) => dispatch( createNewPlaylisted(songId, playlistId) ),
    displayPlaylist: (playlistId) => dispatch( displayPlaylist(playlistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongCardDropdown);
