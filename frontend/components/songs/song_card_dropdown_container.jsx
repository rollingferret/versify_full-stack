import { connect } from "react-redux";

import { removePlaylisted,
    createNewPlaylisted,
} from "../../actions/playlisted_actions";

import SongCardDropdown from "./song_card_dropdown";


const mapStateToProps = (state, ownProps) => ({
    source: ownProps.source,
    selectedSong: ownProps.selectedSong,
    history: ownProps.history,
    params: ownProps.params,
    updateSongCardDropdownState: ownProps.updateSongCardDropdownState,
    items: ownProps.items, // already contains current playlists from SongIndex
    depthLevel: ownProps.depthLevel,
    updateSelectedIndex1: ownProps.updateSelectedIndex1,
    updateSelectedIndex2: ownProps.updateSelectedIndex2,
})

const mapDispatchToProps = (dispatch) => ({
    removePlaylisted: (playlistedId) => dispatch( removePlaylisted(playlistedId) ),
    createNewPlaylisted: ( songId, playlistId) => dispatch( createNewPlaylisted(songId, playlistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongCardDropdown);
