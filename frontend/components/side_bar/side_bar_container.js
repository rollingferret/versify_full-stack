import {connect} from 'react-redux';
import SideBar from './side_bar';
import { displayPlaylist,
} from '../../actions/playlists_actions';


const mapStateToProps = ({entities: { playlists } }, ownProps) => {
return (
    { playlists,
}
)}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)