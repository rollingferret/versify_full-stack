import {connect} from 'react-redux';
import SideBar from './side_bar';
import { fetchPlaylists,
    createPlaylist,
    displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = (state, ownProps) => ({
    playlists: Object.values(state.entities.playlists),
    currentUser: ownProps.currentUser,     // pass this through as props to keep on refresh
    history: ownProps.history,
})

const mapDispatchToProps = (dispatch) => ({
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    fetchPlaylists: () => dispatch( fetchPlaylists() ),
    createPlaylist: (defaultPlaylist) => dispatch( createPlaylist(defaultPlaylist) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

