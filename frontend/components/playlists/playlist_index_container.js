import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {fetchPlaylists,
    displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = ( {entities: { playlists, currentPlaylist }}, ownProps) => ({
    currentPlaylist: currentPlaylist,
    currentUsername: ownProps.currentUser.username,
    currentUser: ownProps.currentUser,
    // pass this through as props to keep on refresh
    history: ownProps.history,
    playlists: Object.values(playlists),
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    displayPlaylist: (playlistId) => dispatch(displayPlaylist(playlistId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)