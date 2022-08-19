import {connect} from 'react-redux';
import PlaylistIndex from './playlist_index';


const mapStateToProps = ( {session, entities: { users } }) => ({
    currentUser: users[session.id]
})

export default connect(mapStateToProps, null)(PlaylistIndex)