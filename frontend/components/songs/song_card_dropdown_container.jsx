import { connect } from "react-redux";

import { removePlaylisted,
    createNewPlaylisted,
} from "../../actions/playlisted_actions";

import SongCardDropdown from "./song_card_dropdown";


const mapStateToProps = (state, ownProps) => ({
    source: ownProps.source,
    songId: ownProps.songId,
    history: ownProps.history,
    updateSongCardDropdownState: ownProps.updateSongCardDropdownState,
    items: ownProps.items, // already contains current playlists
    depthLevel: ownProps.depthLevel,
})

const mapDispatchToProps = (dispatch) => ({
    removePlaylisted: (playlistedId) => dispatch( removePlaylisted(playlistedId) ),
    createNewPlaylisted: ( songId, playlistId) => dispatch( createNewPlaylisted(songId, playlistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongCardDropdown);
