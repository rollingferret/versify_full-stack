import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {fetchPlaylists,
    displayPlaylist,
} from '../../actions/playlist_actions';


const mapStateToProps = ( {entities: { playlists, currentItem }}, ownProps) => ({
    currentPlaylist: currentItem,
    playlists: playlists,
    currentUsername: ownProps.currentUser.username,
    currentUser: ownProps.currentUser,
    // pass this through as props to keep on refresh
    history: ownProps.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    displayPlaylist: (playlistId) => dispatch(displayPlaylist(playlistId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)