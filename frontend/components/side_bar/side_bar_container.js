import {connect} from 'react-redux';
import SideBar from './side_bar';
import { fetchPlaylists,
    createPlaylist,
    displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = ({entities: { playlists } }, ownProps) => {
return (
    { playlists,
}
)}

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylists: () => dispatch( fetchPlaylists() ),
    createPlaylist: (defaultPlaylist) => dispatch( createPlaylist(defaultPlaylist) ),
    displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)