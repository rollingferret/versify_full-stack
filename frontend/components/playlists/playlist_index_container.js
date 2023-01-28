import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {fetchPlaylists,
    displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = ( {entities: { playlists }}, ownProps) => ({
    currentUsername: ownProps.currentUser.username,
    currentUser: ownProps.currentUser,
    history: ownProps.history,
    // pass this through as props to keep on refresh
    playlists: Object.values(playlists),
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)