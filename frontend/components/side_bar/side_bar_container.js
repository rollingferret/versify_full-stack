import {connect} from 'react-redux';
import SideBar from './side_bar';
import { fetchPlaylists,
    createPlaylist,
    displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = ({ entities: { playlists } }, ownProps) => ({
    playlists: Object.values(playlists), //debugger: change this to keys of state for readability
    currentUser: ownProps.currentUser,     // pass this through as props to keep on refresh
    history: ownProps.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch( fetchPlaylists() ),
    createPlaylist: (defaultPlaylist) => dispatch( createPlaylist(defaultPlaylist) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

