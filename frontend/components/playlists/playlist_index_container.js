import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';
import {fetchPlaylists,
} from '../../actions/playlists_actions';


const mapStateToProps = ( {session, entities: { users },   entities: { playlists }  }, ownProps) => ({
    currentUsername: ownProps.currentUser.username,
    currentUser: ownProps.currentUser, 
    // pass this through as props to keep on refresh
    playlists: Object.values(playlists),
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    editPlaylist: (playlist, id) => dispatch( editPlaylist(playlist, id) ),
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex)